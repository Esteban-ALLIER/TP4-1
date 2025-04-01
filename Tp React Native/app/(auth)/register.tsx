// import { Text, View, StyleSheet, Alert } from 'react-native';
//  import { Link, router } from 'expo-router'; 
// import { useState } from 'react';
// import { useAuth } from '@/context/ctx';
// import { auth } from "@/config/firebase";
// import { createUserWithEmailAndPassword } from 'firebase/auth';

// export default function Register() {

//   const [email,setEmail] = useState(null);
//   const [password,setPassword] = useState(null)
//   const [loading, setLoading] = useState(false);

//     const handleRegister = async () => {
//       if (!email || !password) {
//         Alert.alert("Erreur", "Veuillez remplir tous les champs.");
//         return;
//       }

//       setLoading(true);
//       try {
//         await createUserWithEmailAndPassword(auth, email, password);
//         Alert.alert("Succès", "Inscription réussie !");
//         router.replace("/login")
//         // Redirection ou mise à jour de l'état après inscription
//       } catch (error) {
//         Alert.alert("Erreur", (error as Error).message);
//       }
//       setLoading(false);
//     };
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Register Screen</Text>
//       <Link href="/login" style={styles.button}>
//         Already have an account. Go to Login Screen
//       </Link>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#25292e',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     color: '#000000',
//   },
//   button: {
//     fontSize: 20,
//     textDecorationLine: 'underline',
//     color: '#fff',
//   },
// });
import { Text, View, StyleSheet, Alert, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Link, router } from 'expo-router';
import { useState } from 'react';
import { auth } from "@/config/firebase";
import { Link, useRouter } from "expo-router";

const  RegisterScreen = () => {
   const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pays, setPays] = useState("");
  const [departement, setDepartement] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
 const [secureText, setSecureText] = useState(true);

  const handleRegister = async () => {
    if (!email || !password || !name || !pays || !departement) {
      Alert.alert("Erreur", "Veuillez remplir tous les champs.");
      return;
    }

    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert("Succès", "Inscription réussie !");
      router.replace("/(app)");
    } catch (error: any) {
      Alert.alert("Erreur", error.message);
    }
    setLoading(false);
  };

  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Inscription</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Nom de famille"
        placeholderTextColor="#888"
        autoCapitalize="none"
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Pays"
        placeholderTextColor="#888"
        autoCapitalize="none"
        onChangeText={setPays}
      />
      <TextInput
        style={styles.input}
        placeholder="Departement"
        placeholderTextColor="#888"
        autoCapitalize="none"
        onChangeText={setDepartement}
      />

      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        placeholderTextColor="#888"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister} disabled={loading}>
        {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>S'inscrire</Text>}
      </TouchableOpacity>

      <Link href="/login" style={styles.link}>
        Déjà un compte ? Connectez-vous
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'f4f4f4',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: "#f4f4f4",
  },
  input: {
    marginBottom: 10,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    flex: 1,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#0b03fc",
  },
  link : {
    color : "#303bc0"
  }
});

export default RegisterScreen