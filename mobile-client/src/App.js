import { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { articleAPI } from './api';
import ArticleList from './ArticleList';
import AddArticleForm from './AddArticleForm';

export default function App() {
  const [articles, setArticles] = useState([]);

  const loadArticles = async () => {
      setArticles(await articleAPI.getAll());
  };

  useEffect(() => {
    loadArticles();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Article Manager</Text>
      <AddArticleForm onSave={loadArticles} />
      <ArticleList articles={articles} onDelete={loadArticles} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 }
});
