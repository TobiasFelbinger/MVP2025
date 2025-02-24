import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  ScrollView,
  TextInput
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = NativeStackScreenProps<RootStackParamList, 'ContactDetails'>;

export function ContactDetailsScreen({ route }: Props) {
  const [isInformationVisible, setIsInformationVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<'Separat' | 'All'>('Separat');

  // Dummy journal entries for demonstration
  const journalEntries = [
    {
      date: '2024-02-23',
      content: 'First meeting discussion'
    },
    {
      date: '2024-02-22',
      content: 'Followed up on project timeline'
    },
    {
      date: '2024-02-21',
      content: 'Initial contact established'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.fullName}>Full name</Text>
          <TextInput 
            style={styles.nameInput}
            placeholder="Enter name"
          />
        </View>
        
        {/* Social Links with Text Fields */}
        <View style={styles.socialLinksContainer}>
          <View style={styles.socialLinkRow}>
            <TouchableOpacity style={styles.socialButton}>
              <Text>📞</Text>
            </TouchableOpacity>
            <TextInput 
              style={styles.socialInput}
              placeholder="Phone number"
            />
          </View>
          <View style={styles.socialLinkRow}>
            <TouchableOpacity style={styles.socialButton}>
              <Text>📘</Text>
            </TouchableOpacity>
            <TextInput 
              style={styles.socialInput}
              placeholder="Facebook link"
            />
          </View>
          <View style={styles.socialLinkRow}>
            <TouchableOpacity style={styles.socialButton}>
              <Text>📸</Text>
            </TouchableOpacity>
            <TextInput 
              style={styles.socialInput}
              placeholder="Instagram"
            />
          </View>
          <View style={styles.socialLinkRow}>
            <TouchableOpacity style={styles.socialButton}>
              <Text>💼</Text>
            </TouchableOpacity>
            <TextInput 
              style={styles.socialInput}
              placeholder="LinkedIn"
            />
          </View>
        </View>

        {/* Profile Image */}
        <View style={styles.profileImageContainer}>
          <Image 
            source={{ uri: 'https://via.placeholder.com/150' }}
            style={styles.profileImage}
          />
        </View>

        {/* View Information Button */}
        <TouchableOpacity 
          style={styles.viewInfoButton}
          onPress={() => setIsInformationVisible(!isInformationVisible)}
        >
          <Text style={styles.viewInfoText}>
            View Information {isInformationVisible ? '▼' : '▶'}
          </Text>
        </TouchableOpacity>

        {/* Messages Section */}
        <View style={styles.messagesSection}>
          <Text style={styles.sectionTitle}>Messages:</Text>
          <View style={styles.tabContainer}>
            <TouchableOpacity 
              style={[styles.tab, activeTab === 'Separat' && styles.activeTab]}
              onPress={() => setActiveTab('Separat')}
            >
              <Text>Separat</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.tab, activeTab === 'All' && styles.activeTab]}
              onPress={() => setActiveTab('All')}
            >
              <Text>All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.messageContainer} />
        </View>

        {/* Journal Section */}
        <View style={styles.journalSection}>
          <View style={styles.journalHeader}>
            <Text style={styles.sectionTitle}>Journal</Text>
            <TouchableOpacity style={styles.addEntryButton}>
              <Text style={styles.addEntryText}>+ Add Entry</Text>
            </TouchableOpacity>
          </View>
          
          {journalEntries.map((entry, index) => (
            <View key={index} style={styles.journalEntry}>
              <Text style={styles.journalDate}>{entry.date}</Text>
              <Text style={styles.journalContent}>{entry.content}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  fullName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  header: {
    marginBottom: 20,
  },
  nameInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
    fontSize: 16,
  },
  socialLinksContainer: {
    marginBottom: 20,
  },
  socialLinkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  socialInput: {
    flex: 1,
    marginLeft: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
    fontSize: 16,
  },
  socialButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#f0f0f0',
  },
  viewInfoButton: {
    padding: 12,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    marginBottom: 20,
  },
  viewInfoText: {
    fontSize: 16,
  },
  messagesSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#f0f0f0',
    marginRight: 10,
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: '#e0e0e0',
  },
  messageContainer: {
    height: 200,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
  },
  journalSection: {
    marginBottom: 20,
  },
  journalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  addEntryButton: {
    padding: 8,
  },
  addEntryText: {
    color: '#007AFF',
  },
  journalEntry: {
    marginBottom: 15,
    padding: 12,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
  },
  journalDate: {
    color: '#666',
    marginBottom: 4,
  },
  journalContent: {
    fontSize: 16,
  },
}); 