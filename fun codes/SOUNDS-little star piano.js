/*Little star piano*/
/*Lyu Xiaoteng 9/8/2020*/

const beat = 60 / 96;
const half_beat = beat / 2;
const little_star_left = list(
    piano(48, half_beat), piano(55, half_beat), piano(52, half_beat), piano(55, half_beat), 
    piano(48, half_beat), piano(55, half_beat), piano(52, half_beat), piano(55, half_beat),
    piano(48, half_beat), piano(57, half_beat), piano(53, half_beat), piano(57, half_beat),
    piano(48, half_beat), piano(55, half_beat), piano(52, half_beat), piano(55, half_beat),
    
    piano(48, half_beat), piano(57, half_beat), piano(53, half_beat), piano(57, half_beat),
    piano(48, half_beat), piano(55, half_beat), piano(52, half_beat), piano(55, half_beat),
    piano(47, half_beat), piano(55, half_beat), piano(50, half_beat), piano(55, half_beat),
    piano(48, half_beat), piano(55, half_beat), piano(52, half_beat), piano(55, half_beat),
    
    piano(48, half_beat), piano(52, half_beat), piano(55, half_beat), piano(60, half_beat),
    piano(48, half_beat), piano(53, half_beat), piano(57, half_beat), piano(60, half_beat),
    piano(48, half_beat), piano(52, half_beat), piano(55, half_beat), piano(60, half_beat),
    piano(43, half_beat), piano(47, half_beat), piano(50, half_beat), piano(55, half_beat),
    
    piano(48, half_beat), piano(52, half_beat), piano(55, half_beat), piano(60, half_beat),
    piano(48, half_beat), piano(53, half_beat), piano(57, half_beat), piano(60, half_beat),
    piano(48, half_beat), piano(52, half_beat), piano(55, half_beat), piano(60, half_beat),
    piano(43, half_beat), piano(47, half_beat), piano(50, half_beat), piano(55, half_beat),
    
    piano(48, half_beat), piano(55, half_beat), piano(52, half_beat), piano(55, half_beat), 
    piano(48, half_beat), piano(55, half_beat), piano(52, half_beat), piano(55, half_beat),
    piano(48, half_beat), piano(57, half_beat), piano(53, half_beat), piano(57, half_beat),
    piano(48, half_beat), piano(55, half_beat), piano(52, half_beat), piano(55, half_beat),
    
    piano(48, half_beat), piano(57, half_beat), piano(53, half_beat), piano(57, half_beat),
    piano(48, half_beat), piano(55, half_beat), piano(52, half_beat), piano(55, half_beat),
    piano(47, half_beat), piano(55, half_beat), piano(50, half_beat), piano(55, half_beat),
    piano(48, half_beat), piano(55, half_beat), piano(52, half_beat), piano(55, half_beat));

const little_star_right = list(
    piano(60, beat), piano(60, beat), piano(67, beat), piano(67, beat), 
    piano(69, beat), piano(69, beat), piano(67, beat * 2), 
    
    piano(65, beat), piano(65, beat), piano(64, beat), piano(64, beat), 
    piano(62, beat), piano(62, beat), piano(60, beat * 2),
    
    piano(67, beat), piano(67, beat), piano(65, beat), piano(65, beat),
    piano(64, beat), piano(64, beat), piano(62, beat * 2),
    
    piano(67, beat), piano(67, beat), piano(65, beat), piano(65, beat),
    piano(64, beat), piano(64, beat), piano(62, beat * 2),
    
    piano(60, beat), piano(60, beat), piano(67, beat), piano(67, beat), 
    piano(69, beat), piano(69, beat), piano(67, beat * 2), 
    
    piano(65, beat), piano(65, beat), piano(64, beat), piano(64, beat), 
    piano(62, beat), piano(62, beat), piano(60, beat * 2));
 /*  
    piano(72, beat), piano(72, beat), piano(79, beat), piano(79, beat), 
    piano(81, beat), piano(81, beat), piano(79, beat * 2), 
    
    piano(77, beat), piano(77, beat), piano(76, beat), piano(76, beat), 
    piano(74, beat), piano(74, beat), piano(72, beat * 2));
 */
const little_star = list(consecutively(little_star_left), consecutively(little_star_right));
play(simultaneously(little_star));
//play_concurrently(consecutively(little_star_left));