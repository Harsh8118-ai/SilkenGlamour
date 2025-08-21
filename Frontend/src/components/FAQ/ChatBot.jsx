// import ChatBot from 'react-simple-chatbot';
// import { ThemeProvider } from 'styled-components';

// const steps = [
//   {
//     id: 'Greet',
//     message: 'Hello, Welcome to SilkenGlamour',
//     trigger: '1',
//   },
//   {
//     id: '1',
//     message: 'Please Enter your Name :',
//     trigger: '2',
//   },
//   {

//     id: '2',
//     user: true,
//     trigger: '3'
//   },
//   {
//     id: '3',
//     message: 'Hii {previousValue}, Please select your issue',
//     trigger: 'issue'
//   },
//   {
//     id: 'issue',
//     options: [
//       { 
//         value: "Q1",
//         label: "Does SilkenGlamlour Salon at Home Noida provides all kinds of salon and parlor services?",
//         trigger: "Q1"
//       },

//       { 
//         value: "Q2", 
//         label: "Does SilkenGlamlour Salon at Home Noida provides all kinds of salon and parlor services?", 
//         trigger: "Q2" 
//       },

//       { 
//         value: "Q3", 
//         label: "Do you accept online and offline payments both for salon services?", 
//         trigger: "Q3" 
//       },

//       // { 
//       //   value: "Q4", 
//       //   label: "Angular", 
//       //   trigger: "Q4" 
//       // },

//       // { 
//       //   value: "Q5", 
//       //   label: "Angular", 
//       //   trigger: "Q5" 
//       // },
//     ]
//   },
//   {
//     id: 'Q1',
//     message: 'Yes, At SilkenGlamlour Salon-at-Home we provide all kinds of widely used Salon and Parlour services including Waxing, Facials, Cleanup, Manicure & Pedicures, Bridal Grooming, Hair Color, Hair Spa, and many more at your comfortable space and privacy.',
//     trigger: 'issue'
//   },
//   {
//     id: 'Q2',
//     message: 'Yes, At SilkenGlamlour Salon-at-Home we provide all kinds of widely used Salon and Parlour services including Waxing, Facials, Cleanup, Manicure & Pedicures, Bridal Grooming, Hair Color, Hair Spa, and many more at your comfortable space and privacy. www.SilkenGlamlour.com',
//     trigger: 'issue'
//   },
//   {
//     id: 'Q3',
//     message: 'Yes, SilkenGlamlour accepts payment from both online and offline modes with the feasibility of after or before the salon services. Also, before introducing any products of any brand in our salon services, we entail home user testing under the guidance of certified beauty professionals hence all the products which we use in our Salon-at-home services are 100% tested and verified.',
//     trigger: 'issue'
//   },
//   // {
//   //   id: 'Q4',
//   //   message: '',
//   //   trigger: 'issue'
//   // },
//   // {
//   //   id: 'Q5',
//   //   message: '',
//   //   trigger: 'issue'
//   // },
//   // {
//   //   id: 'Q6',
//   //   message: '',
//   //   trigger: 'issue'
//   // },
// ]

// // Creating our own theme
// const theme = {
//   background: '#d6cbbc',
//   headerBgColor: 'linear-gradient(to right, #2E2117, #796855, #2E2117)',
//   botBubbleColor: 'linear-gradient(to bottom, #2E2117, #796855, #2E2117)',
//   headerFontColor: '#E3DBD0',
//   botFontColor: 'white',
//   userBubbleColor: 'linear-gradient(to left, #C6B198, #E3DBD0)',
//   userFontColor: 'black',
//   headerFontSize: '23px',
// };



// function Bot() {
//   return (
// <>
// {/* <div className='shadow-md parent-container overflow-visible z-10 shadow-black rounded-lg'> */}
//     <div className="App sm:mt-4 mt-2 rounded-xl border-2 border-black relative sm:mb-20 mb-16">
//       <ThemeProvider theme={theme}>
      
//         <ChatBot

          
//           headerTitle="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SilkenGlamour Bot"
//           steps={steps}

//           style={{ width: '320px', height: '100%' }} 
          


//         />
       
//       </ThemeProvider>
//     </div>
//     {/* </div> */}
//     </>
//   );
// }

// export default Bot;
