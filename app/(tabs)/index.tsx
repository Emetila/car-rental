import { useEffect, useState } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Onboarding() {
  function getPost() {
    console.log("Gotten all twitter feed posts");
  }

  useEffect(() => {
    getPost();
  }, []);

  // const [checked, setChecked] = React.useState(false);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // console.log ('user information', fullName, phoneNumber, password, confirmPassword)

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <ImageBackground
        source={require("@/assets/images/splach2.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <ScrollView>
          <Image
            resizeMode="contain"
            style={{ height: 200, alignSelf: "center", marginVertical: 50 }}
            source={require("../../assets/images/logo.png")}
          />

          <View>
            <View style={{ marginBottom: 20 }}>
              <TextInput
                style={styles.input}
                placeholder="Enter your full name"
                onChangeText={(name) => {
                  setFullName(name);
                }}
              />
            </View>
            <View style={{ marginBottom: 20 }}>
              <TextInput
                style={styles.input}
                placeholder="Enter your password"
                secureTextEntry
                onChangeText={(password) => {
                  setPassword(password);
                }}
              />
            </View>
          </View>

          <View style={{ marginBottom: 20 }}>
            <TouchableOpacity>
              <Text
                style={{
                  paddingHorizontal: 10,
                  textAlign: "center",
                  fontWeight: 400,
                  color: '#fff'
                }}
              >
                Forgot password
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.mainBtn}>
            <Text style={{ color: "#fff", textTransform: "capitalize" }}>
              Login
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  paragraphOne: {
    textAlign: "center",
    marginHorizontal: 40,
    marginVertical: 20,
    fontSize: 16,
    fontWeight: "300",
    color: "#807894",
  },

  image: {
    flex: 1,
    justifyContent: "center",
    padding: 40
  },

  input: {
    backgroundColor: "#fff",
    color: "#000",
    textAlign: "center",
    paddingVertical: 15,
    paddingRight: 10,
    paddingLeft: 16,
    borderRadius: 74,
  },

  checkbox: {
    backgroundColor: "#E8DEFE",
    width: 16,
    height: 14,
    padding: 3,
  },
  mainBtn: {
    backgroundColor: "#212121",
    color: "#fff",
    width: "auto",
    height: 50,
    textAlign: "center",
    borderRadius: 74,
    alignItems: "center",
    justifyContent: "center",
  },
});
