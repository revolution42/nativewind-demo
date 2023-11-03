import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { useGlobalSearchParams } from 'expo-router';

// export async function generateStaticParams(): Promise<Record<string, string>[]> {
    
//     /*var collection = [];

//     for (let i = 0; i < 10000; i++) {
//         collection.push({stockcode: "stock_" + i.toString()});
//     }

//     // Return an array of params to generate static HTML files for.
//     // Each entry in the array will be a new page.

//     return collection;
//   }


export default function Page() {
    const { stockcode } = useGlobalSearchParams();

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>This is the page for {stockcode}</Text>
        <Link href="/">Home</Link>

        <Text style={styles.subtitle}>This is the item page</Text>
      </View>
      
      <View style={{paddingTop:200}}>
      <Text style={styles.subtitle}>  &nbsp;  </Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
