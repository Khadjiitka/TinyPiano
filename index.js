const keys = document.querySelectorAll('.white-key, .black-key');

        
        const keyMap = {
            'a': 'C',  'w': 'C#',
            's': 'D',  'e': 'D#',
            'd': 'E',
            'f': 'F',  't': 'F#',
            'g': 'G',  'y': 'G#',
            'h': 'A',  'u': 'A#',
            'j': 'B'
        };

        // Функция воспроизведения звука
        function playNote(noteId) {
            const noteAudio = document.getElementById(noteId);
            const keyElement = document.querySelector(`[data-note="${noteId}"]`);

            if (!noteAudio || !keyElement) return; 
            keyElement.classList.add('active');
            noteAudio.currentTime = 0;
            noteAudio.play();
            setTimeout(() => {
                keyElement.classList.remove('active');
            }, 200);
        }

        // 1. Клик мышкой
        keys.forEach(key => {
            key.addEventListener('click', () => {
                const noteId = key.dataset.note;
                playNote(noteId);
            });
        });

        // 2. Нажатие клавиши на клавиатуре
        document.addEventListener('keydown', (e) => {
            // Если клавиша зажата, не вызываем функцию повторно
            if (e.repeat) return; 

            const key = e.key.toLowerCase(); 
            if (keyMap[key]) {
                playNote(keyMap[key]);
            }
        });