document.getElementById('markdown').oninput = (e) => {
    let text = e.target.value;
    
    text = text.replace(/^# (.*$)/gim, '<h1>$1</h1>');
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
    text = text.replace(/\n/g, '<br>');
    
    document.getElementById('preview').innerHTML = text;
};
