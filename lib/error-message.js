document.addEventListener('DOMContentLoaded', function() {
    
  // ----------------------------------------------
  // ▼数字とハイフン記号の入力チェック用スクリプト
  // ----------------------------------------------
  var targets = document.getElementsByClassName('number');
  for (var i=0 ; i<targets.length ; i++) {
    // ▼文字が入力されたタイミングでチェックする：
    targets[i].oninput = function () {
      var alertelement = this.parentNode.getElementsByClassName('error-message');
      if( ( this.value != '') && ( this.value.match( /[^\d\-]+/ )) ) {
        // ▼何か入力があって、指定以外の文字があれば
        if( alertelement[0] ) { alertelement[0].innerHTML = '入力には、数字とハイフン記号だけが使えます。'; }
        this.style.border = "2px solid red";
      }
      else {
        // ▼何も入力がないか、または指定文字しかないなら
        if( alertelement[0] ) { alertelement[0].innerHTML = ""; }
        this.style.border = "1px solid black";
      }
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {

  // --------------------------------------------
  // ▼英字と特定の記号の入力チェック用スクリプト
  // --------------------------------------------
  var targets = document.getElementsByClassName('alpha');
  for (var i=0 ; i<targets.length ; i++) {
    // ▼文字が入力されたタイミングでチェックする：
    targets[i].oninput = function () {
      var alertelement = this.parentNode.getElementsByClassName('error-message');
      if( ( this.value != '') && ( this.value.match( /[^a-zA-Z0-9_.\-@]/ )) ) {
        // ▼何か入力があって、指定以外の文字があれば
        if( alertelement[0] ) { alertelement[0].innerHTML = '入力には、英字と数字と記号「_.-@」だけが使えます。'; }
        this.style.border = "2px solid red";
      }
      else {
        // ▼何も入力がないか、または指定文字しかないなら
        if( alertelement[0] ) { alertelement[0].innerHTML = ""; }
        this.style.border = "1px solid black";
      }
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {

  // -----------------------
  // 2文字以上の入力チェック
  // -----------------------
  var targets = document.getElementsByClassName('chars2');
  for (var i=0 ; i<targets.length ; i++) {
    // ▼文字が入力されたタイミングでチェックする：
    targets[i].oninput = function () {
      var alertelement = this.parentNode.getElementsByClassName('error-message');
      if( this.value.trim().length < 2 ) {
        // ▼空白を除いた入力文字数が2文字よりも少なければ
        if( alertelement[0] ) { alertelement[0].innerHTML = "入力文字数が少なすぎます。2文字以上を入力して下さい。"; }
        this.style.border = "2px solid red";
      }
      else {
        // ▼何も入力がないか、または指定文字しかないなら
        if( alertelement[0] ) { alertelement[0].innerHTML = ""; }
        this.style.border = "1px solid black";
      }
    }
  }

});