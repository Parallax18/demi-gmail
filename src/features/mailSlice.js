import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
      sendMessageIsOpen: false,
      emails : [],
      selectedMail: null
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
   openSendMessage: state => {
       state.sendMessageIsOpen = true;
   },
   closeSendMessage: state => {
       state.sendMessageIsOpen = false;
   },
   fetchEmails : (state, action ) => {
       console.log("data" ,action.payload)
       state.emails.push(action.payload)
   },
   selectMail : (state, action) => {
       state.selectedMail = action.payload;
   }
  },
});

export const { openSendMessage, closeSendMessage, fetchEmails, selectMail } = mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export const selectMailState = (state) => state.mail;

export default mailSlice.reducer;
