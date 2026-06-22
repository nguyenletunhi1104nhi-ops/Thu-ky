import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "" || password === "") {
      Alert.alert("Thông báo", "Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    // Login giả để test
    if (username === "admin" && password === "123456") {
      Alert.alert("Thành công", "Đăng nhập thành công!");
    } else {
      Alert.alert("Lỗi", "Sai tài khoản hoặc mật khẩu.");
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>🍈 TamCam</Text>
      </View>

      {/* Khung Login */}
      <View style={styles.card}>
        <Text style={styles.title}>Đăng nhập tài khoản</Text>

        <TextInput
          style={styles.input}
          placeholder="Tên tài khoản"
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
          <Text style={styles.buttonIcon}>🍈</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.link}>Quên mật khẩu?</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.link}>Đăng ký tài khoản?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8B6A6A",
    justifyContent: "center",
    alignItems: "center",
  },

  logoContainer: {
    position: "absolute",
    top: 50,
    left: 20,
    backgroundColor: "#F6E7E7",
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 5,
  },

  logo: {
    fontWeight: "bold",
    fontSize: 18,
  },

  card: {
    width: 320,
    backgroundColor: "#F5EEEE",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
  },

  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 20,
  },

  input: {
    width: "100%",
    height: 45,
    backgroundColor: "#F8DADA",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#E8B5B5",
  },

  loginButton: {
    width: 50,
    height: 50,
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },

  buttonIcon: {
    fontSize: 24,
  },

  link: {
    fontSize: 12,
    color: "#444",
    marginTop: 5,
  },
});
