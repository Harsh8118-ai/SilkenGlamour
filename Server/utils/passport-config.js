const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GitHubStrategy = require("passport-github2").Strategy;
const User = require("../models/user-model");
const OAuthUser = require("../models/oauth-user-model");
const { v4: uuidv4 } = require("uuid");

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: `${process.env.BASE_BACKEND_URL}/api/oauth/google/callback`,
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                let user = await User.findOne({ email: profile.emails[0].value });

                if (!user) {
                    user = new User({
                        username: profile.displayName,
                        email: profile.emails[0].value,
                        password: uuidv4(), 
                        street: "N/A",
                        town: "N/A",
                        pincode: "000000",
                        authProvider: "google",
                    });
                    await user.save();
                }

                let oauthUser = await OAuthUser.findOne({ providerId: profile.id });

                if (!oauthUser) {
                    oauthUser = new OAuthUser({
                        userId: user._id,
                        provider: "google",
                        providerId: profile.id,
                    });
                    await oauthUser.save();
                }
                return done(null, user);
            } catch (error) {
                return done(error, null);
            }
        }
    )
);

passport.use(
    new GitHubStrategy(
        {
            clientID: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            callbackURL: `${process.env.BASE_BACKEND_URL}/api/oauth/github/callback`,
            scope: ["user:email"],
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                let email = profile.emails && profile.emails[0]?.value;
                if (!email) {
                    return done(new Error("Email not provided by GitHub"), null);
                }

                let user = await User.findOne({ email });

                if (!user) {
                    user = new User({
                        username: profile.username || "GitHub User",
                        email,
                        password: uuidv4(), 
                        street: "N/A",
                        town: "N/A",
                        pincode: "000000",
                        authProvider: "github",
                    });
                    await user.save();
                }

                let oauthUser = await OAuthUser.findOne({ providerId: profile.id });

                if (!oauthUser) {
                    oauthUser = new OAuthUser({
                        userId: user._id,
                        provider: "github",
                        providerId: profile.id,
                    });
                    await oauthUser.save();
                }

                return done(null, user);
            } catch (error) {
                return done(error, null);
            }
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (error) {
        done(error, null);
    }
});
