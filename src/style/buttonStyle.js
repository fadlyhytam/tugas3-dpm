import { StyleSheet } from 'react-native';

export const buttonStyles = StyleSheet.create({
  // Tombol dengan garis abu-abu (seperti Edit Profile di header)
  grayOutlinedButton: {
    borderColor: 'lightgray',  // Warna garis tombol
    borderWidth: 1,            // Ketebalan garis tombol
    borderRadius: 4,           // Menambahkan sudut melengkung
    paddingVertical: 10,       // Padding vertikal (atas dan bawah)
    paddingHorizontal: 30,     // Padding horizontal (kiri dan kanan)
  },
  // Teks tombol dengan huruf tebal
  grayOutlinedButtonText: {
    color: 'black',            // Warna teks tombol
    fontWeight: '700',         // Teks dengan berat tebal
    fontSize: 16,              // Ukuran font teks
    textAlign: 'center',       // Menyelaraskan teks di tengah
  },

  // Tombol utama dengan latar belakang hijau WhatsApp
  greenButton: {
    backgroundColor: '#075E54', // Warna hijau khas WhatsApp
    paddingVertical: 12,        // Padding vertikal
    paddingHorizontal: 40,      // Padding horizontal
    borderRadius: 5,            // Membuat sudut melengkung
    justifyContent: 'center',   // Menyelaraskan isi tombol
    alignItems: 'center',       // Menyelaraskan teks ke tengah
  },
  greenButtonText: {
    color: 'white',             // Warna teks tombol
    fontWeight: 'bold',         // Teks dengan huruf tebal
    fontSize: 16,               // Ukuran font
    textAlign: 'center',        // Menyelaraskan teks di tengah
  },
});
