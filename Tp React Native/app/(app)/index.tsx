import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Link, Redirect, useRootNavigationState, useRouter } from 'expo-router';
import { useAuth } from '@/context/ctx';
import { getAuth } from 'firebase/auth';
import Button from '@/components/ui/Button';
import { TextInput, IconButton, Button as Bt } from "react-native-paper";

export default function Index() {
  const { user, loading } = useAuth();
  const router = useRouter();

  if (!user)
    return <Redirect href="/login" />

  const signOut = () => {
    const auth = getAuth();

    auth.signOut();
  }
  const goToTicketsIndex = () => {
    router.replace("/tickets");
  }

  return (
    <View style={styles.container}>
      <Text>Bienvenue {user.email}</Text>
      <Bt mode="contained" onPress={goToTicketsIndex}>Liste de tickets </Bt>
      <Pressable onPress={signOut}>
        <Bt mode="text" onPress={signOut}>Se déconnecter</Bt>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
