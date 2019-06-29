// Основные параметры
var ip = window.location.hostname;
var port = '443';

// Действуем после загрузки html
$(document).ready(function() {
    // Сокет
    var ws;
    
    let
        setContactStatus,
        setOrderStatus;
    
    // Функция подключения
    var connect = function() {
        ws = new WebSocket('ws://'+ip+':'+port);
        ws.onopen = onopen;
		ws.onmessage = onmessage;
		ws.onerror = onerror;
		ws.onclose = onclose;
    }
    
    // При подключении к серверу
    function onopen() {
        // Если нет уникальной строки клиента, то получить ее от сервера
        if (localStorage.getItem('sh') == null) {
			ws.send(JSON.stringify({
				type: 'connect',
				data: {
					sh: ''
				}
			}));
		} else {
			ws.send(JSON.stringify({
				type: 'connect',
				data: {
					sh: localStorage.getItem('sh')
				}
			}));
		}
    }
    
    // При получении сообщений от сервера
    function onmessage(evt) {
        try {
            var m = JSON.parse(evt.data);
        } catch (e) {
            return;
        }
        
        // Анализ полученных данных
        switch (m['type']) {
                
            // Устанавливаем уникальную строку
            case 'setSH':
                localStorage.setItem('sh', m['data'].sh);
            break;
                
            // Статус обратной связи
            case 'setContactStatus':
                setContactStatus(m['data']);
            break;
                
            // Статус заказа
            case 'setOrderStatus':
                setOrderStatus(m['data']);
            break;
                
            // Дефолтная обработка
            default:
                console.log('Неизвестный запрос: '+m['type']);
            break;
        }
    }
    
    // Устанавливаем коннект
    connect();
    
    /* Запросы к серверу */
    
    // Напишите нам
    $('.contacts-wf-send').on('click', ()=>{
        let
            msg = {};
        msg.name = $('.contacts-wf-name').val();
        msg.email = $('.contacts-wf-email').val();
        msg.text = $('.contacts-wf-text').val();
        
        $('.contacts-wf-status').html('Отправляем...');
        $('.contacts-wf-status').css('color', 'white');
        
        sendMsg('feedback', {
            msg: msg,
            sh: localStorage.getItem('sh')
        });
    });
    
    // Изменение статуса в feedback
    setContactStatus = (data) => {
        switch (data.status) {
                
            // Нет ошибок
            case 0:                
                $('.contacts-wf-status').html('Мы получили Ваше сообщение :)<br>Спасибо!');
                $('.contacts-wf-status').css('color', '#57da52');
                $('.contacts-wf-name').val('');
                $('.contacts-wf-email').val('');
                $('.contacts-wf-text').val('');
            break;
            
            // Ошибка при вводе имени
            case 1:
                $('.contacts-wf-status').html('Вы ошиблись при вводе имени :(');
                $('.contacts-wf-status').css('color', '#FFDBE1');
            break;
                
            // Ошибка при вводе email
            case 2:
                $('.contacts-wf-status').html('Вы ошиблись при вводе email :(');
                $('.contacts-wf-status').css('color', '#FFDBE1');
            break;
                
            // Ошибка при вводе text
            case 3:
                $('.contacts-wf-status').html('Вы ошиблись при вводе текста :(');
                $('.contacts-wf-status').css('color', '#FFDBE1');
            break;
                
            // Ошибка
            default:
                $('.contacts-wf-status').html('Упс, что-то пошло не так :(<br>Повторите попытку.');
                $('.contacts-wf-status').css('color', '#FFDBE1');
            break;
        }
        setTimeout(()=>{
            $('.contacts-wf-status').css('color', '#fff');
            $('.contacts-wf-status').html('');
        }, 4000);
    }
    
    // Оставить заявку
    $('.order-w-send').on('click', (e)=>{
        let
            msg = {},
            from = $(e.target).parent().attr('data-from'),
            type = $(e.target).parent().attr('data-type');
        
        msg.name = $('.order-w-name').val();
        msg.tel = $('.order-w-tel').val();
        
        sendMsg('app', {
            msg: msg,
            from: from,
            type: type,
            sh: localStorage.getItem('sh')
        });
        
        $('.order-w-status').html('Заявка отправляется, подождите...');
        $('.order-w-status').css('color', 'white');
    });
    
    // Статус заказа
    setOrderStatus = (data) => {
        switch (data.status) {
                
            // Нет ошибок
            case 0:                
                $('.order-w-status').html('Мы получили Ваше сообщение :)<br>Спасибо!');
                $('.order-w-status').css('color', '#57da52');
                $('.order-w-name').val('');
                $('.order-w-tel').val('');
            break;
            
            // Ошибка при вводе имени
            case 1:
                $('.order-w-status').html('Вы ошиблись при вводе имени :(');
                $('.order-w-status').css('color', '#FFDBE1');
            break;
                
            // Ошибка
            default:
                $('.order-w-status').html('Упс, что-то пошло не так :(<br>Повторите попытку.');
                $('.order-w-status').css('color', '#FFDBE1');
                $('.order-w-name').val('');
                $('.order-w-tel').val('');
            break;
        }
        setTimeout(()=>{
            $('.contacts-wf-status').css('color', '#fff');
            $('.contacts-wf-status').html('');
        }, 4000);
    }
    
    // Функция отправки
	var sendMsg = function(type, data) {
		ws.send(JSON.stringify({
			type: type,
			data: data
		}));
	}

});

