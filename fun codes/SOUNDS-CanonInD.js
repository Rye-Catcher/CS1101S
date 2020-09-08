const beat = 60 / 75;
const double_beat = beat * 2;
const half_beat = beat / 2;
const canon_violin = list(
    silence_sound(beat * 4 * 4),
    
    violin(78, double_beat), violin(76, double_beat), violin(74, double_beat), violin(73, double_beat),
    violin(71, double_beat), violin(69, double_beat), violin(71, double_beat), violin(73, double_beat),
    
    violin(78, double_beat), violin(76, double_beat), violin(74, double_beat), violin(73, double_beat),
    violin(71, double_beat), violin(69, double_beat), violin(71, double_beat), violin(73, double_beat),
    
    violin(74, double_beat), violin(73, double_beat), violin(71, double_beat), violin(69, double_beat),
    violin(67, double_beat), violin(65, double_beat), violin(67, double_beat), violin(69, double_beat),
    
    violin(74, double_beat), violin(73, double_beat), violin(71, double_beat), violin(69, double_beat),
    violin(67, double_beat), violin(65, double_beat), violin(67, double_beat), violin(64, double_beat)
    
    );
const piano_p = (note, duration) => adsr(0.1, 0.4, 0.1, 0.4)(piano(note, duration));

const canon_piano_left = list(
    simultaneously(list(
        piano_p(50, double_beat), 
        consecutively(list(
            silence_sound(half_beat),
            piano_p(54, half_beat),
            piano_p(57, half_beat),
            piano_p(62, half_beat))))),
    simultaneously(list(
        piano_p(45, double_beat), 
        consecutively(list(
            silence_sound(half_beat),
            piano_p(52, half_beat),
            piano_p(57, half_beat),
            piano_p(61, half_beat))))),
    simultaneously(list(
        piano_p(47, double_beat), 
        consecutively(list(
            silence_sound(half_beat),
            piano_p(54, half_beat),
            piano_p(59, half_beat),
            piano_p(62, half_beat))))),
    simultaneously(list(
        piano_p(41, double_beat), 
        consecutively(list(
            silence_sound(half_beat),
            piano_p(54, half_beat),
            piano_p(57, half_beat),
            piano_p(61, half_beat))))),
    simultaneously(list(
        piano_p(43, double_beat), 
        consecutively(list(
            silence_sound(half_beat),
            piano_p(50, half_beat),
            piano_p(55, half_beat),
            piano_p(59, half_beat))))),
    simultaneously(list(
        piano_p(38, double_beat), 
        consecutively(list(
            silence_sound(half_beat),
            piano_p(54, half_beat),
            piano_p(57, half_beat),
            piano_p(62, half_beat))))),
    simultaneously(list(
        piano_p(43, double_beat), 
        consecutively(list(
            silence_sound(half_beat),
            piano_p(52, half_beat),
            piano_p(59, half_beat),
            piano_p(62, half_beat))))),
    simultaneously(list(
        piano_p(45, double_beat), 
        consecutively(list(
            silence_sound(half_beat),
            piano_p(52, half_beat),
            piano_p(57, half_beat),
            piano_p(61, half_beat))))),
            
            
    simultaneously(list(
        piano_p(50, double_beat), 
        consecutively(list(
            silence_sound(half_beat),
            piano_p(54, half_beat),
            piano_p(57, half_beat),
            piano_p(62, half_beat))))),
    simultaneously(list(
        piano_p(45, double_beat), 
        consecutively(list(
            silence_sound(half_beat),
            piano_p(52, half_beat),
            piano_p(57, half_beat),
            piano_p(61, half_beat))))),
    simultaneously(list(
        piano_p(47, double_beat), 
        consecutively(list(
            silence_sound(half_beat),
            piano_p(54, half_beat),
            piano_p(59, half_beat),
            piano_p(62, half_beat))))),
    simultaneously(list(
        piano_p(41, double_beat), 
        consecutively(list(
            silence_sound(half_beat),
            piano_p(54, half_beat),
            piano_p(57, half_beat),
            piano_p(61, half_beat))))),
    simultaneously(list(
        piano_p(43, double_beat), 
        consecutively(list(
            silence_sound(half_beat),
            piano_p(50, half_beat),
            piano_p(55, half_beat),
            piano_p(59, half_beat))))),
    simultaneously(list(
        piano_p(38, double_beat), 
        consecutively(list(
            silence_sound(half_beat),
            piano_p(54, half_beat),
            piano_p(57, half_beat),
            piano_p(62, half_beat))))),
    simultaneously(list(
        piano_p(43, double_beat), 
        consecutively(list(
            silence_sound(half_beat),
            piano_p(52, half_beat),
            piano_p(59, half_beat),
            piano_p(62, half_beat))))),
    simultaneously(list(
        piano_p(45, double_beat), 
        consecutively(list(
            silence_sound(half_beat),
            piano_p(52, half_beat),
            piano_p(57, half_beat),
            piano_p(61, half_beat))))),
            
    
    simultaneously(list(
        piano_p(50, double_beat), 
        consecutively(list(
            silence_sound(half_beat),
            piano_p(54, half_beat),
            piano_p(57, half_beat),
            piano_p(62, half_beat))))),
    simultaneously(list(
        piano_p(45, double_beat), 
        consecutively(list(
            silence_sound(half_beat),
            piano_p(52, half_beat),
            piano_p(57, half_beat),
            piano_p(61, half_beat))))),
    simultaneously(list(
        piano_p(47, double_beat), 
        consecutively(list(
            silence_sound(half_beat),
            piano_p(54, half_beat),
            piano_p(59, half_beat),
            piano_p(62, half_beat))))),
    simultaneously(list(
        piano_p(41, double_beat), 
        consecutively(list(
            silence_sound(half_beat),
            piano_p(54, half_beat),
            piano_p(57, half_beat),
            piano_p(61, half_beat))))),
    simultaneously(list(
        piano_p(43, double_beat), 
        consecutively(list(
            silence_sound(half_beat),
            piano_p(50, half_beat),
            piano_p(55, half_beat),
            piano_p(59, half_beat))))),
    simultaneously(list(
        piano_p(38, double_beat), 
        consecutively(list(
            silence_sound(half_beat),
            piano_p(54, half_beat),
            piano_p(57, half_beat),
            piano_p(62, half_beat))))),
    simultaneously(list(
        piano_p(43, double_beat), 
        consecutively(list(
            silence_sound(half_beat),
            piano_p(52, half_beat),
            piano_p(59, half_beat),
            piano_p(62, half_beat))))),
    simultaneously(list(
        piano_p(45, double_beat), 
        consecutively(list(
            silence_sound(half_beat),
            piano_p(52, half_beat),
            piano_p(57, half_beat),
            piano_p(61, half_beat))))),
    
    
    
    simultaneously(list(
        piano_p(50, double_beat), 
        consecutively(list(
            silence_sound(half_beat),
            piano_p(54, half_beat),
            piano_p(57, half_beat),
            piano_p(62, half_beat))))),
    simultaneously(list(
        piano_p(45, double_beat), 
        consecutively(list(
            silence_sound(half_beat),
            piano_p(52, half_beat),
            piano_p(57, half_beat),
            piano_p(61, half_beat))))),
    simultaneously(list(
        piano_p(47, double_beat), 
        consecutively(list(
            silence_sound(half_beat),
            piano_p(54, half_beat),
            piano_p(59, half_beat),
            piano_p(62, half_beat))))),
    simultaneously(list(
        piano_p(41, double_beat), 
        consecutively(list(
            silence_sound(half_beat),
            piano_p(54, half_beat),
            piano_p(57, half_beat),
            piano_p(61, half_beat))))),
    simultaneously(list(
        piano_p(43, double_beat), 
        consecutively(list(
            silence_sound(half_beat),
            piano_p(50, half_beat),
            piano_p(55, half_beat),
            piano_p(59, half_beat))))),
    simultaneously(list(
        piano_p(38, double_beat), 
        consecutively(list(
            silence_sound(half_beat),
            piano_p(54, half_beat),
            piano_p(57, half_beat),
            piano_p(62, half_beat))))),
    simultaneously(list(
        piano_p(43, double_beat), 
        consecutively(list(
            silence_sound(half_beat),
            piano_p(52, half_beat),
            piano_p(59, half_beat),
            piano_p(62, half_beat))))),
    simultaneously(list(
        piano_p(45, double_beat), 
        consecutively(list(
            silence_sound(half_beat),
            piano_p(52, half_beat),
            piano_p(57, half_beat),
            piano_p(61, half_beat))))),
   
   
            
     simultaneously(list(
        piano_p(50, double_beat), 
        consecutively(list(
            silence_sound(half_beat),
            piano_p(54, half_beat),
            piano_p(57, half_beat),
            piano_p(62, half_beat))))),
    simultaneously(list(
        piano_p(45, double_beat), 
        consecutively(list(
            silence_sound(half_beat),
            piano_p(52, half_beat),
            piano_p(57, half_beat),
            piano_p(61, half_beat))))),
    simultaneously(list(
        piano_p(47, double_beat), 
        consecutively(list(
            silence_sound(half_beat),
            piano_p(50, half_beat),
            piano_p(54, half_beat),
            piano_p(59, half_beat))))),
    simultaneously(list(
        piano_p(41, double_beat), 
        consecutively(list(
            silence_sound(half_beat),
            piano_p(49, half_beat),
            piano_p(54, half_beat),
            piano_p(57, half_beat))))),
    simultaneously(list(
        piano_p(43, double_beat), 
        consecutively(list(
            silence_sound(half_beat),
            piano_p(47, half_beat),
            piano_p(50, half_beat),
            piano_p(54, half_beat))))),
    simultaneously(list(
        piano_p(38, double_beat), 
        consecutively(list(
            silence_sound(half_beat),
            piano_p(45, half_beat),
            piano_p(50, half_beat),
            piano_p(54, half_beat))))),
    simultaneously(list(
        piano_p(43, double_beat), 
        consecutively(list(
            silence_sound(half_beat),
            piano_p(47, half_beat),
            piano_p(50, half_beat),
            piano_p(55, half_beat))))),
    simultaneously(list(
        piano_p(45, double_beat), 
        consecutively(list(
            silence_sound(half_beat),
            piano_p(49, half_beat),
            piano_p(52, half_beat),
            piano_p(57, half_beat)))))
    );

const canon_piano_right = list(
    silence_sound(beat * 4 * 4),
    
    silence_sound(beat * 4 * 4),
    
    piano_p(74, double_beat), piano_p(73, double_beat), piano_p(71, double_beat), piano_p(69, double_beat),
    piano_p(67, double_beat), piano_p(65, double_beat), piano_p(67, double_beat), piano_p(69, double_beat),
    
    simultaneously(list(piano_p(74, double_beat), piano_p(78, double_beat))),
    simultaneously(list(piano_p(76, double_beat), piano_p(73, double_beat))),
    simultaneously(list(piano_p(74, double_beat), piano_p(71, double_beat))),
    simultaneously(list(piano_p(73, double_beat), piano_p(69, double_beat))),
    simultaneously(list(piano_p(71, double_beat), piano_p(67, double_beat))),
    simultaneously(list(piano_p(69, double_beat), piano_p(65, double_beat))),
    simultaneously(list(piano_p(71, double_beat), piano_p(67, double_beat))),
    simultaneously(list(piano_p(73, double_beat), piano_p(69, double_beat)))
    );
 /*  
    cello(72, beat), cello(72, beat), cello(79, beat), cello(79, beat), 
    cello(81, beat), cello(81, beat), cello(79, beat * 2), 
    
    cello(77, beat), cello(77, beat), cello(76, beat), cello(76, beat), 
    cello(74, beat), cello(74, beat), cello(72, beat * 2));
 */
const canon_in_D = list(
    consecutively(canon_violin), 
    consecutively(canon_piano_left), 
    consecutively(canon_piano_right));
play(simultaneously(canon_in_D));
//play_concurrently(consecutively(little_star_left));