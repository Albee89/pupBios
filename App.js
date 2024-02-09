import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import data from './API-data';

function Avatar(props) {
  return (
    <Image
      style={styles.avatar}
      source={{ uri: props.url }}
    />
  );
}

const Heading = (props) => (
  <Text style={styles.heading}>{props.children}</Text>
);

const Title = (props) => (
  <Text style={styles.title}>{props.children}</Text>
);

const styles = StyleSheet.create({
  avatar: { width: 100, height: 100 },
  heading: { width: 100, height: 100 },
  title: { backgroundColor: 'hotpink' },
});

// App-specific components
const WoofPost = (props) => (
  <View style={woofPostStyles.layout}>
    <Image style={woofPostStyles.image} source={{ uri: props.image }} />
    <View style={woofPostStyles.content}>
      <Text style={woofPostStyles.title}>{props.title}</Text>
      <Text style={woofPostStyles.description}>{props.description}</Text>
    </View>
  </View>
);

const woofPostStyles = StyleSheet.create({
  layout: {
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
  },
  image: {
    width: '30%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  content: {
    flex: 0,
  },
  title: {
    fontSize: 18, // Adjust the font size as needed
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14, // Adjust the font size as needed
  },
});

const HomeScreen = () => (
  <ScrollView style={{ flex: 1, backgroundColor: '#FAF9FA' }}>
    {data.posts.map((post) => (
      <WoofPost
        key={post.id}
        image={post.image}
        title={post.title}
        description={post.description}
      />
    ))}
  </ScrollView>
);

const App = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#FAF9FA' }}>
    <HomeScreen />
  </SafeAreaView>
);

export default App;
