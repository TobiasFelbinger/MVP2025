export interface Contact {
  id: string;
  fullName: string;
  profilePicture?: string;
  phoneNumber?: string;
  facebookLink?: string;
  emailAddress?: string;
  linkedInLink?: string;
  information: {
    jobTitle?: string;
    company?: string;
    notes?: string;
    customFields: Record<string, string>;
  };
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface JournalEntry {
  id: string;
  contactId: string;
  content: string;
  createdAt: string;
  tags?: string[];
}

export interface Message {
  id: string;
  contactId: string;
  content: string;
  createdAt: string;
  isRead: boolean;
  direction: 'incoming' | 'outgoing';
} 