const beat = 60 / 70;
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
    violin(67, double_beat), violin(65, double_beat), violin(67, double_beat), violin(64, double_beat),

    violin(62, beat), violin(65, beat), violin(69, beat), violin(67, beat),
    violin(65, beat), violin(62, beat), violin(65, beat), violin(64, beat),
    violin(62, beat), violin(59, beat), violin(62, beat), violin(69, beat),
    violin(67, beat), violin(71, beat), violin(69, beat), violin(67, beat),

    violin(65, beat), violin(62, beat), violin(64, beat), violin(73, beat),
    violin(74, beat), violin(65, beat), violin(69, beat), violin(69, beat),
    violin(71, beat), violin(67, beat), violin(69, beat), violin(65, beat),
    violin(62, beat), violin(74, beat), violin(74, beat), silence_sound(half_beat), violin(73, half_beat),
    
    violin(74, half_beat), violin(73, half_beat), violin(74, half_beat), violin(62, half_beat),
    violin(60, half_beat), violin(69, half_beat), violin(64, half_beat), violin(65, half_beat),
    violin(62, half_beat), violin(74, half_beat), violin(73, half_beat), violin(71, half_beat),
    violin(73, half_beat), violin(65, half_beat), violin(69, half_beat), violin(71, half_beat),
    violin(67, half_beat), violin(65, half_beat), violin(64, half_beat), violin(67, half_beat),
    violin(65, half_beat), violin(64, half_beat), violin(62, half_beat), violin(60, half_beat),
    violin(59, half_beat), violin(69, half_beat), violin(67, half_beat), violin(65, half_beat),
    violin(64, half_beat), violin(67, half_beat), violin(65, half_beat), violin(64, half_beat),
    
    violin(62, half_beat), violin(64, half_beat), violin(65, half_beat), violin(67, half_beat),
    violin(69, half_beat), violin(64, half_beat), violin(69, half_beat), violin(67, half_beat),
    violin(65, half_beat), violin(71, half_beat), violin(69, half_beat), violin(67, half_beat),
    violin(69, half_beat), violin(67, half_beat), violin(65, half_beat), violin(64, half_beat),
    violin(62, half_beat), violin(67, half_beat), violin(71, half_beat), violin(73, half_beat),
    violin(74, half_beat), violin(73, half_beat), violin(71, half_beat), violin(69, half_beat),
    violin(67, half_beat), violin(65, half_beat), violin(64, half_beat), violin(71, half_beat),
    violin(69, half_beat), violin(71, half_beat), violin(69, half_beat), violin(67, half_beat)
    
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
            piano_p(57, half_beat))))),
     
     
            
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
            piano_p(61, half_beat)))))
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
    simultaneously(list(piano_p(73, double_beat), piano_p(69, double_beat))),
    
    simultaneously(list(piano_p(74, double_beat), piano_p(65, double_beat))),
    simultaneously(list(piano_p(73, double_beat), piano_p(64, double_beat))),
    simultaneously(list(piano_p(71, double_beat), piano_p(62, double_beat))),
    simultaneously(list(piano_p(69, double_beat), piano_p(60, double_beat))),
    simultaneously(list(piano_p(67, double_beat), piano_p(59, double_beat))),
    simultaneously(list(piano_p(65, double_beat), piano_p(57, double_beat))),
    simultaneously(list(piano_p(67, double_beat), piano_p(59, double_beat))),
    simultaneously(list(piano_p(60, double_beat), piano_p(64, double_beat))),

    piano_p(74, beat), piano_p(78, beat), piano_p(81, beat), piano_p(79, beat),
    piano_p(78, beat), piano_p(74, beat), piano_p(78, beat), piano_p(76, beat),
    piano_p(74, beat), piano_p(83, beat), piano_p(74, beat), piano_p(81, beat),
    piano_p(79, beat), piano_p(83, beat), piano_p(81, beat), piano_p(79, beat),
    
    simultaneously(list(
        piano_p(78, double_beat), 
        consecutively(list(
            piano_p(78, beat),
            piano_p(74, beat))))),
    simultaneously(list(
        piano_p(76, double_beat), 
        consecutively(list(
            piano_p(76, beat),
            piano_p(84, beat))))),
    simultaneously(list(
        piano_p(74, double_beat), 
        consecutively(list(
            piano_p(86, beat),
            piano_p(78, beat))))),
    simultaneously(list(
        piano_p(72, double_beat), 
        consecutively(list(
            piano_p(81, beat),
            piano_p(81, beat))))),
    simultaneously(list(
        piano_p(83, double_beat), 
        consecutively(list(
            piano_p(95, beat),
            piano_p(79, beat))))),
    simultaneously(list(
        piano_p(81, double_beat), 
        consecutively(list(
            piano_p(93, beat),
            piano_p(78, beat))))),
    simultaneously(list(
        piano_p(71, double_beat), 
        consecutively(list(
            piano_p(74, beat),
            piano_p(86, beat))))),
    piano_p(88, half_beat / 2), piano_p(86, half_beat/2), piano_p(88, half_beat / 2),
    piano_p(86, beat * (3/4)), piano_p(84, half_beat),
    
    
    simultaneously(list(
        piano_p(74, double_beat), 
        consecutively(list(
            piano_p(74, beat),
            piano_p(78, beat))))),
    simultaneously(list(
        piano_p(73, double_beat), 
        consecutively(list(
            piano_p(81, beat),
            piano_p(79, beat))))),
    simultaneously(list(
        piano_p(71, double_beat), 
        consecutively(list(
            piano_p(78, beat),
            piano_p(74, beat))))),
    simultaneously(list(
        piano_p(69, double_beat), 
        consecutively(list(
            piano_p(78, beat),
            piano_p(76, beat))))),
    simultaneously(list(
        piano_p(67, double_beat), 
        consecutively(list(
            piano_p(74, beat),
            piano_p(71, beat))))),
    simultaneously(list(
        piano_p(65, double_beat), 
        consecutively(list(
            piano_p(74, beat),
            piano_p(81, beat))))),
    simultaneously(list(
        piano_p(67, double_beat), 
        consecutively(list(
            piano_p(79, beat),
            piano_p(83, beat))))),
    simultaneously(list(
        piano_p(64, double_beat), 
        consecutively(list(
            piano_p(81, beat),
            piano_p(79, beat))))),
            
    piano_p(74, half_beat), piano_p(73, half_beat), piano_p(74, half_beat), piano_p(62, half_beat),
    piano_p(60, half_beat), piano_p(69, half_beat), piano_p(64, half_beat), piano_p(65, half_beat),
    piano_p(62, half_beat), piano_p(74, half_beat), piano_p(73, half_beat), piano_p(71, half_beat),
    piano_p(73, half_beat), piano_p(78, half_beat), piano_p(81, half_beat), piano_p(83, half_beat),
    piano_p(79, half_beat), piano_p(78, half_beat), piano_p(76, half_beat), piano_p(79, half_beat),
    piano_p(78, half_beat), piano_p(76, half_beat), piano_p(84, half_beat), piano_p(73, half_beat),
    simultaneously(list(piano_p(67, half_beat), piano_p(71, half_beat))),
    simultaneously(list(piano_p(64, half_beat), piano_p(67, half_beat))),
    piano_p(74, beat),
    piano_p(76, half_beat / 2), piano_p(74, half_beat / 2), piano_p(76, half_beat / 2),
    piano_p(74, beat * (3/4)), piano_p(73, half_beat)
    );
 /*  
    cello(72, beat), cello(72, beat), cello(79, beat), cello(79, beat), 
    cello(81, beat), cello(81, beat), cello(79, beat * 2), 
    
    cello(77, beat), cello(77, beat), cello(76, beat), cello(76, beat), 
    cello(74, beat), cello(74, beat), cello(72, beat * 2));
 */
const canon_in_D = list(
    consecutively(canon_violin), 
    consecutively(canon_piano_right),
    consecutively(canon_piano_left));
play(simultaneously(canon_in_D));
//play_concurrently(consecutively(little_star_left));

