const listNumbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78,
  79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113,
  114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144,
  145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175,
  176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206,
  207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237,
  238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268,
  269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299,
  300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330,
  331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361,
  362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392,
  393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423,
  424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454,
  455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485,
  486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516,
  517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547,
  548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578,
  579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609,
  610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640,
  641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671,
  672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702,
  703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733,
  734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764,
  65, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795,
  796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826,
  827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857,
  858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888,
  889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919,
  920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950,
  951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981,
  982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010,
  1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036,
  1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062,
  1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080, 1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088,
  1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111, 1112, 1113, 1114,
  1115, 1116, 1117, 1118, 1119, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140
];

const unsortedListNumber = [
  447, 621, 741, 782, 964, 206, 346, 59, 416, 139, 257, 637, 69, 136, 700, 255, 704, 770, 687, 549, 155, 663, 15, 871, 362, 794, 64, 507, 587, 789, 491, 253,
  268, 695, 589, 744, 393, 698, 792, 596, 784, 793, 636, 66, 830, 143, 533, 79, 728, 896, 93, 600, 10, 824, 315, 592, 353, 292, 386, 78, 320, 55, 429, 82,
  401, 45, 574, 702, 117, 724, 886, 227, 555, 293, 538, 591, 612, 857, 783, 708, 221, 219, 859, 834, 423, 949, 109, 451, 668, 417, 643, 697, 489, 269, 287,
  781, 544, 185, 209, 418, 757, 980, 138, 766, 88, 322, 21, 67, 833, 37, 847, 626, 976, 818, 677, 856, 567, 689, 174, 992, 916, 201, 305, 90, 714, 370, 438,
  773, 256, 420, 42, 18, 854, 899, 758, 634, 459, 460, 759, 223, 725, 112, 165, 840, 270, 763, 377, 751, 966, 391, 951, 638, 361, 397, 304, 738, 550, 327,
  676, 119, 837, 36, 337, 439, 930, 584, 959, 736, 260, 124, 968, 49, 753, 969, 92, 701, 652, 245, 684, 478, 95, 317, 295, 529, 41, 354, 693, 134, 931, 247,
  216, 390, 932, 11, 998, 22, 342, 556, 917, 571, 850, 532, 261, 706, 284, 904, 509, 312, 479, 126, 114, 381, 224, 855, 628, 535, 880, 160, 396, 502, 809, 940,
  433, 435, 180, 933, 953, 259, 415, 251, 387, 364, 325, 403, 629, 278, 294, 852, 745, 598, 742, 888, 288, 961, 485, 785, 472, 298, 467, 406, 425, 184, 970,
  761, 799, 680, 623, 803, 988, 426, 108, 791, 691, 123, 506, 443, 241, 597, 616, 458, 499, 819, 552, 796, 514, 167, 804, 243, 711, 928, 239, 394, 619,
  898, 86, 389, 308, 84, 897, 102, 569, 271, 613, 50, 581, 46, 441, 178, 29, 960, 750, 358, 490, 47, 72, 187, 733, 979, 696, 625, 705, 226, 496, 642,
  716, 83, 505, 779, 678, 392, 806, 798, 878, 81, 360, 900, 654, 566, 822, 920, 958, 851, 518, 715, 171, 39, 906, 170, 249, 222, 921, 522, 446, 812,
  645, 774, 747, 318, 334, 473, 326, 347, 385, 860, 717, 922, 240, 671, 653, 230, 622, 151, 434, 466, 573, 480, 965, 149, 376, 242, 267, 618, 111,
  870, 646, 379, 291, 542, 277, 398, 512, 366, 340, 986, 843, 669, 620, 493, 572, 120, 723, 923, 368, 214, 934, 131, 797, 947, 815, 539, 442, 635,
  351, 788, 116, 564, 419, 883, 182, 468, 135, 981, 133, 660, 497, 145, 169, 198, 449, 164, 3, 330, 414, 432, 609, 551, 593, 177, 884, 272, 31, 374,
  204, 110, 672, 649, 94, 469, 296, 633, 378, 978, 846, 183, 210, 301, 952, 823, 655, 624, 827, 217, 452, 666, 405, 400, 159, 494, 13, 537, 77, 746,
  511, 503, 263, 560, 513, 60, 848, 476, 27, 754, 585, 141, 562, 820, 179, 355, 775, 63, 80, 670, 756, 845, 168, 233, 122, 713, 404, 481, 408, 369,
  802, 927, 103, 521, 925, 53, 19, 644, 739, 290, 768, 276, 707, 176, 461, 99, 821, 944, 70, 709, 985, 56, 780, 651, 437, 193, 685, 399, 732, 71, 76,
  4, 816, 465, 590, 973, 283, 100, 563, 357, 911, 730, 657, 202, 440, 937, 926, 457, 863, 515, 115, 38, 314, 300, 787, 200, 1, 607, 868, 54, 718,
  275, 24, 430, 302, 520, 811, 343, 144, 688, 831, 147, 409, 548, 699, 955, 956, 316, 40, 525, 866, 881, 356, 464, 445, 371, 541, 339, 402, 488,
  152, 412, 971, 995, 984, 280, 901, 252, 132, 861, 89, 510, 826, 875, 954, 534, 915, 30, 887, 919, 632, 595, 299, 578, 805, 879, 813, 477, 777,
  603, 282, 586, 328, 659, 543, 639, 118, 999, 835, 231, 913, 531, 333, 12, 895, 96, 795, 380, 882, 832, 279, 324, 721, 266, 686, 760, 319, 254,
  6, 674, 989, 648, 462, 608, 945, 218, 504, 75, 384, 309, 192, 163, 454, 58, 849, 872, 232, 737, 48, 963, 140, 310, 2, 891, 557, 273, 726, 456,
  731, 997, 172, 594, 486, 508, 128, 967, 523, 375, 87, 570, 191, 844, 85, 554, 105, 422, 582, 987, 842, 631, 281, 767, 148, 755, 817, 421, 829,
  735, 902, 905, 786, 801, 455, 428, 352, 16, 982, 828, 246, 912, 44, 800, 722, 331, 729, 602, 656, 874, 228, 909, 158, 236, 307, 383, 365, 43, 710,
  545, 877, 743, 97, 703, 150, 583, 367, 727, 740, 924, 853, 234, 427, 957, 372, 335, 991, 35, 599, 448, 601, 363, 9, 153, 683, 453, 104, 26, 186,
  188, 865, 28, 553, 606, 910, 675, 197, 129, 948, 929, 471, 175, 484, 25, 825, 34, 244, 972, 23, 444, 524, 101, 146, 810, 867, 558, 142, 983,
  938, 196, 673, 720, 748, 836, 189, 769, 1000, 579, 610, 994, 14, 516, 495, 918, 487, 614, 211, 285, 68, 858, 225, 771, 190, 8, 580, 962, 154,
  914, 734, 661, 501, 807, 611, 262, 894, 336, 617, 658, 712, 235, 33, 238, 98, 565, 265, 630, 157, 764, 436, 974, 517, 373, 519, 694, 349, 205, 561,
  498, 500, 530, 413, 996, 17, 181, 338, 990, 7, 65, 248, 395, 903, 199, 908, 993, 195, 323, 382, 942, 156, 127, 889, 941, 890, 264, 61,
  166, 258, 679, 215, 946, 667, 125, 546, 692, 547, 749, 939, 332, 274, 885, 640, 173, 977, 313, 297, 864, 410, 841, 213, 483, 407, 286, 893,
  474, 229, 130, 950, 975, 106, 470, 73, 207, 647, 424, 311, 876, 838, 329, 536, 665, 627, 664, 20, 641, 5, 873, 719, 113, 62, 814, 662, 350,
  344, 107, 463, 52, 51, 772, 776, 540, 575, 762, 91, 220, 528, 306, 321, 765, 348, 690, 161, 568, 752, 527, 839, 450, 650, 559, 907, 892, 604,
  588, 203, 208, 431, 121, 57, 162, 682, 605, 345, 862, 935, 32, 936, 790, 388, 475, 526, 576, 482, 303, 615, 237, 250, 359, 492, 289, 869,
  212, 194, 943, 137, 778, 808, 577, 411, 341, 681, 74];

const words = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed bibendum tellus. Mauris blandit metus ligula, eu faucibus ante blandit at. Phasellus fringilla laoreet lectus, non egestas erat sodales a. Quisque suscipit ut augue a tempor. Pellentesque ut posuere nulla, eget sodales dolor. Proin viverra dui purus, vitae egestas ante volutpat a. Praesent sit amet elit leo. Fusce ut ipsum velit. Nulla tincidunt turpis at lorem varius aliquet sit amet a lorem.

Pellentesque libero massa, vehicula sed felis et, elementum hendrerit tortor. Sed mollis quis libero sit amet mollis. Suspendisse nisl nisi, eleifend in aliquam vitae, consequat in felis. Vivamus et fringilla ante, eu mollis enim. Nam auctor sollicitudin elit nec pellentesque. Nam arcu metus, efficitur a ullamcorper ac, consectetur suscipit ante. Etiam tempor ante massa, tincidunt egestas risus imperdiet quis. Nulla fringilla, eros ac dapibus laoreet, velit odio vestibulum risus, eget tincidunt tellus felis ut magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus massa velit, varius sit amet ultrices vel, porttitor at lorem. Curabitur consequat sapien sed lectus varius, sed interdum ipsum ultrices. Sed a eros accumsan, fermentum metus sit amet, mollis tortor. Praesent scelerisque gravida ante vel tincidunt. Fusce libero erat, elementum in leo eget, sagittis auctor orci. Nullam in pellentesque nulla, et porttitor arcu. Maecenas euismod a risus nec eleifend.

Morbi eget semper ante. Donec vel neque est. Mauris eros elit, semper eget congue non, aliquam ut risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse magna urna, egestas a urna eget, cursus feugiat massa. Vestibulum id vehicula enim. Nunc quis interdum velit. Praesent ac quam pulvinar, laoreet arcu eu, tempus dui. Praesent lacinia a turpis in condimentum. Sed malesuada turpis mi, quis porttitor augue molestie a. Phasellus hendrerit, mauris in ultrices euismod, enim quam malesuada nibh, sed placerat arcu odio at ipsum. Vestibulum nec neque id est convallis sagittis vitae ac ante. Donec feugiat risus felis, nec euismod orci facilisis sit amet. Curabitur blandit cursus risus. Praesent cursus, odio in malesuada lacinia, dui metus placerat lacus, dapibus accumsan odio justo eu dui.

In eget ipsum at enim gravida ultricies et et eros. In et maximus lectus, in tristique nunc. Sed ultricies rhoncus hendrerit. Pellentesque varius auctor ex sit amet auctor. Praesent consequat mi vel metus auctor consequat. Maecenas pretium, nisi nec pretium lacinia, quam odio ullamcorper ante, sollicitudin vehicula nulla odio in ligula. Maecenas bibendum pulvinar ex, eget lobortis massa tempus id.

Mauris dapibus leo ut dolor ultricies, et lobortis felis tempor. Nullam vel facilisis lorem. Nam sit amet iaculis nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. In cursus malesuada purus. Proin iaculis lacus eget orci accumsan, vitae congue massa hendrerit. Vivamus dapibus ante et elit eleifend egestas. Sed in mi diam. Donec in lacus tellus. Ut quam lacus, fermentum scelerisque posuere ut, congue ac ante. Pellentesque maximus purus sapien, sit amet malesuada massa porttitor ac. Quisque finibus nec dui efficitur sagittis. Pellentesque quam mauris, aliquet ut sollicitudin quis, posuere nec metus.

Nunc rutrum iaculis massa, sit amet porttitor nulla porta dignissim. Etiam condimentum magna a nibh dictum vehicula. Vestibulum sit amet sodales sapien, vel iaculis purus. Nam id orci turpis. Aliquam diam ligula, fringilla in velit ut, feugiat lobortis mi. In euismod lectus nec nisl fermentum cursus. Donec sit amet nibh nibh. Cras imperdiet aliquam leo, sit amet fringilla urna viverra eleifend. Integer sed tellus sed justo sollicitudin pharetra. Donec luctus ligula quis commodo molestie. In eu tincidunt odio, id feugiat ante. Morbi nec condimentum turpis. Cras commodo semper orci quis viverra. Nunc pharetra volutpat blandit.

Donec iaculis metus ac sodales pharetra. Aenean rutrum lectus at tincidunt tincidunt. Pellentesque sagittis lacus in auctor tempus. Suspendisse iaculis elementum elit, quis finibus sapien efficitur rutrum. Suspendisse luctus neque vel justo lobortis, et suscipit mi vehicula. Nullam vel blandit mi, ullamcorper faucibus magna. Morbi finibus quis nunc sit amet tempus. Nullam eget interdum sem. Quisque laoreet arcu lorem, sit amet vestibulum libero elementum quis. Nunc sollicitudin urna justo, ac rutrum dui porta a. Maecenas ullamcorper justo id tortor facilisis fermentum. Curabitur at imperdiet massa. Phasellus justo metus, gravida non metus nec, fringilla auctor diam. Vestibulum malesuada sit amet est in pellentesque. Curabitur sed enim a mauris efficitur pretium sollicitudin vel lorem. Duis feugiat arcu vel dignissim faucibus.

Donec turpis ligula, viverra consectetur efficitur sed, venenatis eu tortor. Suspendisse sollicitudin luctus mi et pellentesque. Integer tincidunt facilisis tellus, id volutpat turpis laoreet dapibus. Nullam rutrum faucibus urna, at ultricies lorem lobortis ac. Cras scelerisque nisl eget leo eleifend, id convallis est rutrum. Curabitur ultricies lobortis porttitor. Integer facilisis lacinia mi, nec fermentum odio posuere non. In viverra nisl nec eleifend sodales. Maecenas a libero ligula.

Nunc vitae dui id tortor pharetra feugiat. Cras varius varius dolor, id efficitur quam porttitor a. Sed sed elementum ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut nec faucibus massa, ac mollis tortor. In at dui tincidunt, vestibulum arcu in, volutpat eros. Vivamus a nulla et felis ultrices venenatis ac in nibh. Nullam est urna, malesuada eget faucibus ac, commodo vel quam. Curabitur arcu nisl, eleifend malesuada lectus eget, convallis bibendum enim. Aliquam lectus massa, sollicitudin sed purus vel, porttitor malesuada ipsum. Etiam vel diam imperdiet, placerat tortor id, imperdiet turpis. Sed tortor mauris, viverra et velit ut, ullamcorper egestas sem. Quisque rhoncus turpis nec erat auctor volutpat. Etiam nec orci arcu.

Cras et nunc vel ipsum facilisis ornare sit amet sit amet elit. Aliquam et ornare augue. Pellentesque vehicula lacinia magna, vel gravida nisi. Etiam porttitor ex in nisl pharetra aliquam. Nam nec turpis sit amet ipsum placerat consectetur nec sit amet urna. Aliquam erat volutpat. Mauris rutrum sollicitudin maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis vulputate consectetur. Suspendisse auctor enim odio.

Praesent facilisis magna vel egestas elementum. Curabitur id volutpat lacus. In pulvinar erat sit amet nibh blandit gravida. Suspendisse est lectus, rutrum sed dui et, elementum finibus erat. Aliquam a purus at tellus condimentum.`

const listWords = words
  .split(' ')
  .filter(word => word.length > 1)
  .map(word => word.toLocaleLowerCase())
  .sort();

module.exports = {
  listWords,
  listNumbers,
  unsortedListNumber
}

