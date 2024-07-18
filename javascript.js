document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari submit secara default

    // Mendapatkan nilai dari input form
    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert tinggi dari cm ke meter

    // Validasi input form
    if (isNaN(weight) || isNaN(height)) {
        alert('Mohon masukkan nilai yang valid untuk berat dan tinggi badan.');
        return;
    }

    // Menghitung BMI
    const bmi = weight / (height * height);

    // Menampilkan hasil BMI
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>BMI Anda (${gender === 'male' ? 'Laki-Laki' : 'Wanita'}): ${bmi.toFixed(2)}</p>`;
});

document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('bmiForm').reset();
    document.getElementById('result').innerHTML = '';
});
