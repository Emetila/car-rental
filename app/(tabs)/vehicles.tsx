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

        <ScrollView horizontal={true}>
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
                  style={styles.carImage}
                  source={require("../../assets/images/car3.png")}
                />
                <View style={{ marginTop: 90 }}>
                  <Text style={styles.cardText2}>SUV</Text>
                  <Text style={styles.cardText2}>34</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <Text
          style={{
            color: "#212121",
            fontSize: 14,
            fontWeight: 400,
            paddingBottom: 20,
          }}
        >
          Available vehicles
        </Text>

        <View style={{flexDirection: 'column', gap: 30}}>
          <View style={styles.vehiclebox}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ gap: 7 }}>
                <Text
                  style={{ color: "#212121", fontSize: 34, fontWeight: 800 }}
                >
                  Toyota
                </Text>
                <Text
                  style={{ color: "#7D8EA3", fontSize: 14, fontWeight: "400" }}
                >
                  Yaris iA
                </Text>
                <Text
                  style={{ color: "#212121", fontSize: 14, fontWeight: "400" }}
                >
                  Engine
                </Text>
              </View>
              <View style={{ gap: 7 }}>
                <Text
                  style={{ color: "#304FFE", fontSize: 34, fontWeight: 300 }}
                >
                  $350
                </Text>
                <Text
                  style={{ color: "#7D8EA3", fontSize: 14, fontWeight: "400" }}
                >
                  / month
                </Text>
                <Text
                  style={{ color: "#212121", fontSize: 14, fontWeight: "400" }}
                >
                  4-Cyl 1.5 Liter
                </Text>
              </View>
            </View>
            <Image
              style={{ width: 280, height: 190, marginVertical: 20 }}
              source={require("../../assets/images/car4.png")}
            />
          </View>

          <View style={styles.vehiclebox}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ gap: 7 }}>
                <Text
                  style={{ color: "#212121", fontSize: 34, fontWeight: 800 }}
                >
                  Hyundai
                </Text>
                <Text
                  style={{ color: "#7D8EA3", fontSize: 14, fontWeight: "400" }}
                >
                  i20 
                </Text>
                <Text
                  style={{ color: "#212121", fontSize: 14, fontWeight: "400" }}
                >
                  Engine
                </Text>
              </View>
              <View style={{ gap: 7 }}>
                <Text
                  style={{ color: "#304FFE", fontSize: 34, fontWeight: 300 }}
                >
                  $250
                </Text>
                <Text
                  style={{ color: "#7D8EA3", fontSize: 14, fontWeight: "400" }}
                >
                  / month
                </Text>
                <Text
                  style={{ color: "#212121", fontSize: 14, fontWeight: "400" }}
                >
                  6-Cyl 1.0 Liter
                </Text>
              </View>
            </View>
            <Image
              style={{ width: 290, height: 190, marginVertical: 20 }}
              source={require("../../assets/images/car3.png")}
            />
          </View>
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

  carImage: {
    width: 130,
    height: 80,
    position: "absolute",
    zIndex: 1,
    right: 20,
    top: 0,
  },

  vehiclebox: {
    backgroundColor: "#fff",
    borderRadius: 35,
    // width: 354,
    height: 340,
    padding: 20,
  },
});
