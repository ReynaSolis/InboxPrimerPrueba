import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { colors } from "../../../assets/colors";
import { fontFamily } from "../../../assets/font";
import ProfileModal from "../profile/ProfileModal";
import { TouchableHighlight } from "react-native-gesture-handler";
import { commonStyles } from "../common/style";

const SearchBarContainer = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const showProfileModal = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <View style={styles.texto}>
       <Text style={styles.title}>Bienvenido a tu Inbox</Text>
    <View style={styles.searchContainer}>
     
      <TouchableHighlight
        underlayColor={colors.touch}
        style={commonStyles.btn}
        onPress={() => {}}
      >
        <Feather name="menu" size={22} color="black" />
      </TouchableHighlight>
      <Text
        style={styles.searchBar}
        onPress={() => {
          navigation.navigate("Search");
        }}
      >
        Search in mail
      </Text>
      <TouchableOpacity onPress={() => showProfileModal()}>
        <Image
          source={{
            uri: "https://inatriol.by/assets/images/courses-menu/3.jpg",
          }}
          style={styles.avatar}
        />
      </TouchableOpacity>
      <ProfileModal
        open={modalVisible}
        onClose={() => {
          setModalVisible(false);
        }}
      />
    </View>
    </View>
  );
};

export default SearchBarContainer;

const styles = StyleSheet.create({
  searchContainer: {
    height: 48,
    width: "80%",
    alignSelf: "center",
    backgroundColor: colors.lightBlue,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    justifyContent: "space-between",
    marginBottom: 5,
  },
  searchBar: {
    flex: 1,
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: "600",
    color: colors.gray,
    fontFamily: fontFamily.regular,
  },
  avatar: { height: 32, width: 32 },
  texto: { 
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight:'bold',
    fontSize: 15,
   },
   title: { 
     padding:10,
    fontWeight:'bold',
    fontSize: 15,
   },
});
