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
import Carousel from "react-native-snap-carousel";
import * as React from "react";
import { Searchbar } from "react-native-paper";

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F9F9FA",
        padding: 20,
      }}
    >
      <ScrollView>
        <Searchbar
          placeholder="Search for a car"
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.inputsearch}
        />

        <View style={{ padding: 20, flexDirection: "row", gap: 40 }}>
          <TouchableOpacity style={styles.boxes}>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                // position: "relative",
                // gap: 10
              }}
            >
              <Image
                style={styles.carimage}
                source={require("../../assets/images/car1.png")}
              />
              <View style={{ marginTop: 90 }}>
                <Text style={styles.cardText1}>Standard</Text>
                <Text style={styles.cardText1}>56</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box2}>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                // position: "relative",
                // gap: 10
              }}
            >
              <Image
                style={styles.carimage}
                source={require("../../assets/images/car2.png")}
              />
              <View style={{ marginTop: 90 }}>
                <Text style={styles.cardText2}>Prestige</Text>
                <Text style={styles.cardText2}>22</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box2}>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                // position: "relative",
                // gap: 10
              }}
            >
              <Image
                style={styles.carimage}
                source={require("../../assets/images/car2.png")}
              />
              <View style={{ marginTop: 90 }}>
                <Text style={styles.cardText2}>Prestige</Text>
                <Text style={styles.cardText2}>22</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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

  inputsearch: {
    backgroundColor: "#FFF",
    height: 60,
    marginHorizontal: 20,
  },

  boxes: {
    backgroundColor: "#304FFE",
    height: 149,
    width: 120,
    borderRadius: 20,
    // position: "relative",
    flexDirection: "column",
  },

  box2: {
    backgroundColor: "#fff",
    height: 149,
    width: 120,
    borderRadius: 20,
    // position: "relative",
    flexDirection: "column",
  },

  cardText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
    fontWeight: 600,
  },

  cardText1: {
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
    fontWeight: 600,
  },

  cardText2: {
    color: "#7D8EA3",
    textAlign: "center",
    fontSize: 14,
    fontWeight: 600,
  },

  carimage: {
    width: 151,
    height: 86,
    position: "absolute",
    zIndex: 1,
    right: 5,
    top: 0,
  },
});
