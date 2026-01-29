import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { articleAPI } from './api';

export default function AddArticleForm({ onSave }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async () => {
    if (!title.trim() || !content.trim()) return Alert.alert('Error', 'Please enter a title and content');
    try {
      await articleAPI.create(title, content);
      setTitle('');
      setContent('');
      onSave();
    } catch (error) {
      Alert.alert('Error', 'Failed to create article: ' + error.message);
    }
  };

  return (
    <View style={styles.form}>
      <Text style={styles.heading}>Add New Article</Text>
      <View style={styles.field}>
        <Text style={styles.label}>Title:</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          multiline
        />
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Content:</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={content}
          onChangeText={setContent}
          multiline
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add Article</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  form: { marginBottom: 20 },
  heading: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  field: { marginBottom: 10 },
  label: { fontSize: 16, marginBottom: 5 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, fontSize: 16 },
  textArea: { height: 100, textAlignVertical: 'top' },
  button: { backgroundColor: '#007bff', padding: 12, borderRadius: 5, alignItems: 'center', marginTop: 10 },
  buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold' }
});
