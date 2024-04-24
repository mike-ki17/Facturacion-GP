import { Document, Text, Page, StyleSheet, Image, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    Document: {
        size : 'A10',
    },
    Page: {
        backgroundColor: '#000',
        color: '#fff'
    }
})


function PDF({nombre, cedula, direccion, telefono, torres }) {
  return (
    <Document style={styles.Document} >
      <Page size="A6">
        <Text>LA GRANJA CAPESINA</Text>
        <Text> nombre: {nombre}</Text>
        <Text> cedula: {cedula}</Text>
        <Text> torres: {torres[0]}</Text>
      </Page>
    </Document>
  );
}

export default PDF;
