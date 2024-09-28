function openPurchaseScreen() {
    document.getElementById('courses').classList.add('hidden');
    document.getElementById('purchaseScreen').classList.remove('hidden');
}

function completePurchase() {
    // Simulação de compra bem-sucedida
    document.getElementById('purchaseScreen').classList.add('hidden');
    document.getElementById('successMessage').classList.remove('hidden');
    
    // Salvar curso comprado (pode ser feito com localStorage, servidor, etc.)
    const selectedCourse = document.getElementById('courseSelect').value;
    savePurchasedCourse(selectedCourse);
}

function savePurchasedCourse(course) {
    // Implemente a lógica para salvar o curso comprado (por exemplo, usando localStorage)
    // Aqui, estamos apenas exibindo uma mensagem no console
    console.log(`Curso comprado: ${course}`);
}