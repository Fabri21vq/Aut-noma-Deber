import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({     
  container: {
    flex: 1,
    backgroundColor: '#33badfff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },       
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 50,
    color: 'black',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },                  
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: 'black',
  },
  input: {
    borderWidth: 1,
    borderColor: '#f1f4f5',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#f1f4f5',
    width: '100%',
  },
  button: {
    backgroundColor: '#c94545ff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',    
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  img: {
    width: 150,
    height: 150,
    marginBottom: 30,
    borderRadius: 75,
  },
});       
