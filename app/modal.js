window.addEventListener('DOMContentLoaded' ,function() {
    this.setTimeout(function() {
        $('.before-load').addClass('hidden')
    }, 2000)

});


(function() {

    
$('.close-chat').click(function() {
    const status = $('.chatbox').attr('data-open');
    toggleChatBox(status === 'on')
})
function scrollEnd () {
    $('.chat-window').animate({ scrollTop: 9999 }, 'slow');
}

function toggleChatBox(status) {
    $('.close-chat').html(
       status ?
        '<i class="fa-solid fa-angle-up"></i>':
        '<i class="fa-solid fa-angle-down"></i>')
    $('.chatbox')
        .removeClass(status ? 'on' : 'off')
        .addClass(status ? 'off' : 'on')
        .attr('data-open',status ? 'off' : 'on')
    // $('.chat-box')
    scrollEnd()
}

    $('.middle .card').each(function() {
        this.addEventListener('click', function(e) {
            const url = e.target.style.backgroundImage.replace(/\url|\(|\)/g, '').replace(/\"/g, '');
            openPreview(url);
        })
    })
    
    $('.out-preview').click(function() {
        closePreview()
    })

    function openPreview(url) {
        $('.image-preview').removeClass('hidden').addClass('show');
        $('.preview').html(`<img src="${url}" alt="">`);
        
    }
    
    function closePreview() {
        $('.image-preview').removeClass('show').addClass('hidden');
    }
})()

