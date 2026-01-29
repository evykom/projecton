import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { articleAPI } from './api';

export default function ArticleList({ articles, onDelete }) {
  const handleDelete = async (id) => {
    await articleAPI.delete(id);
    onDelete();
  };

  return (
    <View>
      <Text style={styles.heading}>Articles</Text>
      {articles.map((article) => (
        <View key={article._id} style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.title}>{article.title}</Text>
            <TouchableOpacity onPress={() => handleDelete(article._id)} style={styles.deleteButton}>
              <Text style={styles.deleteText}>×</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.content}>{article.content}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  heading: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  card: { marginBottom: 10, padding: 10, backgroundColor: '#f5f5f5', borderRadius: 5 },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 },
  title: { fontSize: 18, fontWeight: 'bold', flex: 1 },
  deleteButton: { width: 30, height: 30, backgroundColor: 'red', borderRadius: 15, justifyContent: 'center', alignItems: 'center' },
  deleteText: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  content: { fontSize: 14 }
});
