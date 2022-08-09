import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, Button, View, Alert } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

// The functions for the buttons will be refined later, this is just the basic idea behind them. I did 12 friends just to demo.
const FriendsListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
    <View>
      <Text style={styles.titleText}>
        {"Friends List Screen"}
      </Text>
      <View style={styles.fixToText}>
        <Button
          title="Go back to userProfile Screen"
          onPress={() => Alert.alert('Back button pressed (will send user back to userProfile Screen)')}
        />
      </View>
      <Text>
        {"Scroll to see your list of friends"}
      </Text>
      <Button
        title="Friend 1"
        color="#BA55D3"
        onPress={() => Alert.alert('Friend 1 chosen')}
      />
    </View>
    <Separator />
    <View>
      <Text>
        {"\n"}      
        </Text>
      <Button
        title="Friend 2"
        color="#9370DB"
        onPress={() => Alert.alert('Friend 2 chosen')}
      />
    </View>
    <Separator />
    <View>
      <Text>
        {"\n"}
      </Text>
      <Button
        title="Friend 3"
        color="#8A2BE2"
        onPress={() => Alert.alert('Friend 3 chosen')}
      />
    </View>
    <Separator />
    <View>
      <Text>
        {"\n"}      
        </Text>
      <Button
        title="Friend 4"
        color="#9400D3"
        onPress={() => Alert.alert('Friend 4 chosen')}
      />
    </View>
    <Separator />
    <View>
      <Text>
        {"\n"}
      </Text>
      <Button
        title="Friend 5"
        color="#800080"
        onPress={() => Alert.alert('Friend 5 chosen')}
      />
    </View>
    <Separator />
    <View>
      <Text>
        {"\n"}      
        </Text>
      <Button
        title="Friend 6"
        color="#4B0082"
        onPress={() => Alert.alert('Friend 6 chosen')}
      />
    </View>
    <Separator />
    <View>
      <Text>
        {"\n"}
      </Text>
      <Button
        title="Friend 7"
        color="#BA55D3"
        onPress={() => Alert.alert('Friend 7 chosen')}
      />
    </View>
    <Separator />
    <View>
      <Text>
        {"\n"}      
        </Text>
      <Button
        title="Friend 8"
        color="#9370DB"
        onPress={() => Alert.alert('Friend 8 chosen')}
      />
    </View>
    <Separator />
    <View>
      <Text>
        {"\n"}
      </Text>
      <Button
        title="Friend 9"
        color="#8A2BE2"
        onPress={() => Alert.alert('Friend 9 chosen')}
      />
    </View>
    <Separator />
    <View>
      <Text>
        {"\n"}      
        </Text>
      <Button
        title="Friend 10"
        color="#9400D3"
        onPress={() => Alert.alert('Friend 10 chosen')}
      />
    </View>
    <Separator />
    <View>
      <Text>
        {"\n"}
      </Text>
      <Button
        title="Friend 11"
        color="#800080"
        onPress={() => Alert.alert('Friend 11 chosen')}
      />
    </View>
    <Separator />
    <View>
      <Text>
        {"\n"}      
        </Text>
      <Button
        title="Friend 12"
        color="#4B0082"
        onPress={() => Alert.alert('Friend 12 chosen')}
      />
    </View>
    <Separator />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'yellow',
    marginHorizontal: 1,
  },
  text: {
    fontSize: 30,
  },
  titleText: {
    fontSize: 25,
    fontWeight: "bold"
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default FriendsListScreen;
