document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari submit secara default

    // Mendapatkan nilai dari input form
    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert tinggi dari cm ke meter

    // Validasi input form
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Mohon masukkan nilai yang valid untuk berat dan tinggi badan.');
        return;
    }

    // Menghitung BMI
    const bmi = weight / (height * height);

    // Menentukan kategori BMI
    let category = '';
    if (bmi < 18.5) {
        category = 'Kekurangan berat badan';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Berat badan normal';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Kelebihan berat badan';
    } else {
        category = 'Obesitas';
    }

    // Menampilkan hasil BMI
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>BMI Anda (${gender === 'male' ? 'Laki-Laki' : 'Wanita'}): ${bmi.toFixed(2)} (${category})</p>`;
});

document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('bmiForm').reset();
    document.getElementById('result').innerHTML = '';
});
