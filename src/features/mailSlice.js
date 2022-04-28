import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
      sendMessageIsOpen: false,
      emails : [],
      starredEmails: [],
      importantEmails: [],
      selectedMail: null,
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
       state.emails.push(action.payload)
   },
   selectMail : (state, action) => {
       state.selectedMail = action.payload;
   },
   starMail : (state, action) => {
        const filterEmails = state.emails

        Object.assign(filterEmails.find(email => email.uid == action.payload.uid),action.payload);
        state.emails = filterEmails
   },
   setImportant: (state, action) => {
        const Emails = state.emails

        Object.assign(Emails.find(email => email.uid == action.payload.uid), action.payload)
        state.emails = Emails
   },
   fetchStarredEmails: (state, action) => {
        state.starredEmails.push(action.payload)
   },
   fetchImportantEmails: (state, action) => {
       state.importantEmails.push(action.payload)
   }
  },
});

export const { 
    openSendMessage, 
    closeSendMessage, 
    fetchEmails, 
    selectMail, 
    starMail, 
    setImportant, 
    fetchStarredEmails, 
    fetchImportantEmails } = mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export const selectMailState = (state) => state.mail;

export default mailSlice.reducer;
