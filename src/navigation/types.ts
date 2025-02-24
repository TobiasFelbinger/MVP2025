export type RootStackParamList = {
  Home: undefined;
  ContactList: undefined;
  ContactDetails: { id: string };
  Messages: undefined;
  MessageThread: { contactId: string };
  Journal: { contactId?: string };
  Search: undefined;
  Settings: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
} 