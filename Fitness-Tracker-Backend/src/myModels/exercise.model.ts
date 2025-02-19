/*
    SCHEMA FOR EXERCISES
    structure:
    {
        "bodyPart": string,
        "equipment": string,
        "gifUrl": string,
        "id": string,
        "instructions": string[],
        "name": string,
        "secondaryMuscles": string[],
        "target": string
    }
*/

export interface ExerciseType {
    bodyPart: string,
    equipment: string,
    gifUrl: string,
    id: string,
    instructions: string[],
    name: string,
    secondaryMuscles: string[],
    target: string
}


const DEFAULT_EXERCISE_LIST: ExerciseType[] = [
    {
        "bodyPart": "waist",
        "equipment": "body weight",
        "gifUrl": "https://v2.exercisedb.io/image/FobXJaVJZo-5lG",
        "id": "0001",
        "instructions": [
            "Lie flat on your back with your knees bent and feet flat on the ground.",
            "Place your hands behind your head with your elbows pointing outwards.",
            "Engaging your abs, slowly lift your upper body off the ground, curling forward until your torso is at a 45-degree angle.",
            "Pause for a moment at the top, then slowly lower your upper body back down to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "3/4 sit-up",
        "secondaryMuscles": [
            "hip flexors",
            "lower back"
        ],
        "target": "abs"
    },
    {
        "bodyPart": "waist",
        "equipment": "body weight",
        "gifUrl": "https://v2.exercisedb.io/image/sjfLh5WkrFNzqS",
        "id": "0002",
        "instructions": [
            "Stand with your feet shoulder-width apart and your arms extended straight down by your sides.",
            "Keeping your back straight and your core engaged, slowly bend your torso to one side, lowering your hand towards your knee.",
            "Pause for a moment at the bottom, then slowly return to the starting position.",
            "Repeat on the other side.",
            "Continue alternating sides for the desired number of repetitions."
        ],
        "name": "45° side bend",
        "secondaryMuscles": [
            "obliques"
        ],
        "target": "abs"
    },
    {
        "bodyPart": "waist",
        "equipment": "body weight",
        "gifUrl": "https://v2.exercisedb.io/image/xDgOUykLwJR9sa",
        "id": "0003",
        "instructions": [
            "Lie flat on your back with your hands placed behind your head.",
            "Lift your legs off the ground and bend your knees at a 90-degree angle.",
            "Bring your right elbow towards your left knee while simultaneously straightening your right leg.",
            "Return to the starting position and repeat the movement on the opposite side, bringing your left elbow towards your right knee while straightening your left leg.",
            "Continue alternating sides in a pedaling motion for the desired number of repetitions."
        ],
        "name": "air bike",
        "secondaryMuscles": [
            "hip flexors"
        ],
        "target": "abs"
    },
    {
        "bodyPart": "waist",
        "equipment": "body weight",
        "gifUrl": "https://v2.exercisedb.io/image/5SlLuweHCmfVXY",
        "id": "0006",
        "instructions": [
            "Lie flat on your back with your knees bent and feet flat on the ground.",
            "Extend your arms straight out to the sides, parallel to the ground.",
            "Engaging your abs, lift your shoulders off the ground and reach your right hand towards your right heel.",
            "Return to the starting position and repeat on the left side, reaching your left hand towards your left heel.",
            "Continue alternating sides for the desired number of repetitions."
        ],
        "name": "alternate heel touchers",
        "secondaryMuscles": [
            "obliques"
        ],
        "target": "abs"
    },
    {
        "bodyPart": "back",
        "equipment": "cable",
        "gifUrl": "https://v2.exercisedb.io/image/Pbfy78lzo67Bzh",
        "id": "0007",
        "instructions": [
            "Sit on the cable machine with your back straight and feet flat on the ground.",
            "Grasp the handles with an overhand grip, slightly wider than shoulder-width apart.",
            "Lean back slightly and pull the handles towards your chest, squeezing your shoulder blades together.",
            "Pause for a moment at the peak of the movement, then slowly release the handles back to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "alternate lateral pulldown",
        "secondaryMuscles": [
            "biceps",
            "rhomboids"
        ],
        "target": "lats"
    },
    {
        "bodyPart": "chest",
        "equipment": "leverage machine",
        "gifUrl": "https://v2.exercisedb.io/image/Pi7Iu4T6Hi1vQW",
        "id": "0009",
        "instructions": [
            "Adjust the machine to your desired height and secure your knees on the pad.",
            "Grasp the handles with your palms facing down and your arms fully extended.",
            "Lower your body by bending your elbows until your upper arms are parallel to the floor.",
            "Pause for a moment, then push yourself back up to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "assisted chest dip (kneeling)",
        "secondaryMuscles": [
            "triceps",
            "shoulders"
        ],
        "target": "pectorals"
    },
    {
        "bodyPart": "waist",
        "equipment": "assisted",
        "gifUrl": "https://v2.exercisedb.io/image/htidhKtTa2hT45",
        "id": "0010",
        "instructions": [
            "Hang from a pull-up bar with your arms fully extended and your palms facing away from you.",
            "Engage your core and lift your knees towards your chest, keeping your legs together.",
            "Once your knees are at chest level, explosively throw your legs down towards the ground, extending them fully.",
            "Allow your legs to swing back up and repeat the movement for the desired number of repetitions."
        ],
        "name": "assisted hanging knee raise with throw down",
        "secondaryMuscles": [
            "hip flexors",
            "lower back"
        ],
        "target": "abs"
    },
    {
        "bodyPart": "waist",
        "equipment": "assisted",
        "gifUrl": "https://v2.exercisedb.io/image/8o95803xIUqcMR",
        "id": "0011",
        "instructions": [
            "Hang from a pull-up bar with your arms fully extended and your palms facing away from you.",
            "Engage your core muscles and lift your knees towards your chest, bending at the hips and knees.",
            "Pause for a moment at the top of the movement, squeezing your abs.",
            "Slowly lower your legs back down to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "assisted hanging knee raise",
        "secondaryMuscles": [
            "hip flexors"
        ],
        "target": "abs"
    },
    {
        "bodyPart": "waist",
        "equipment": "assisted",
        "gifUrl": "https://v2.exercisedb.io/image/dJQ5Rf6QjZQyet",
        "id": "0012",
        "instructions": [
            "Lie flat on your back with your legs extended and your arms by your sides.",
            "Place your hands under your glutes for support.",
            "Engage your abs and lift your legs off the ground, keeping them straight.",
            "While keeping your legs together, lower them to one side until they are a few inches above the ground.",
            "Pause for a moment, then lift your legs back to the starting position.",
            "Repeat the movement to the other side.",
            "Continue alternating sides for the desired number of repetitions."
        ],
        "name": "assisted lying leg raise with lateral throw down",
        "secondaryMuscles": [
            "hip flexors",
            "obliques"
        ],
        "target": "abs"
    },
    {
        "bodyPart": "waist",
        "equipment": "assisted",
        "gifUrl": "https://v2.exercisedb.io/image/qoeQpNT4QC-pKN",
        "id": "0013",
        "instructions": [
            "Lie flat on your back with your legs extended and your arms by your sides.",
            "Place your hands under your glutes for support.",
            "Engage your core and lift your legs off the ground, keeping them straight.",
            "Raise your legs until they are perpendicular to the ground.",
            "Lower your legs back down to the starting position.",
            "Simultaneously, throw your legs down towards the ground, keeping them straight.",
            "Raise your legs back up to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "assisted lying leg raise with throw down",
        "secondaryMuscles": [
            "hip flexors",
            "quadriceps"
        ],
        "target": "abs"
    },
    {
        "bodyPart": "waist",
        "equipment": "medicine ball",
        "gifUrl": "https://v2.exercisedb.io/image/Vsm5daPbSkXuEp",
        "id": "0014",
        "instructions": [
            "Sit on the ground with your knees bent and feet flat on the floor.",
            "Hold the medicine ball with both hands in front of your chest.",
            "Lean back slightly, engaging your abs and keeping your back straight.",
            "Slowly twist your torso to the right, bringing the medicine ball towards the right side of your body.",
            "Pause for a moment, then twist your torso to the left, bringing the medicine ball towards the left side of your body.",
            "Continue alternating sides for the desired number of repetitions."
        ],
        "name": "assisted motion russian twist",
        "secondaryMuscles": [
            "obliques",
            "lower back"
        ],
        "target": "abs"
    },
    {
        "bodyPart": "back",
        "equipment": "leverage machine",
        "gifUrl": "https://v2.exercisedb.io/image/JsEKq8SiMacOTJ",
        "id": "0015",
        "instructions": [
            "Adjust the machine to your desired weight and height.",
            "Place your hands on the parallel bars with a close grip, palms facing each other.",
            "Hang from the bars with your arms fully extended and your feet off the ground.",
            "Engage your back muscles and pull your body up towards the bars, keeping your elbows close to your body.",
            "Continue pulling until your chin is above the bars.",
            "Pause for a moment at the top, then slowly lower your body back down to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "assisted parallel close grip pull-up",
        "secondaryMuscles": [
            "biceps",
            "forearms"
        ],
        "target": "lats"
    },
    {
        "bodyPart": "upper legs",
        "equipment": "assisted",
        "gifUrl": "https://v2.exercisedb.io/image/LmzYyoViA1Zbo5",
        "id": "0016",
        "instructions": [
            "Lie face down on a mat or bench with your legs fully extended.",
            "Have a partner or use a resistance band to secure your ankles.",
            "Engage your hamstrings and lift your legs towards your glutes, keeping your knees straight.",
            "Pause for a moment at the top, then slowly lower your legs back down to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "assisted prone hamstring",
        "secondaryMuscles": [
            "glutes",
            "lower back"
        ],
        "target": "hamstrings"
    },
    {
        "bodyPart": "back",
        "equipment": "leverage machine",
        "gifUrl": "https://v2.exercisedb.io/image/o7-ZeUT6RzOe1X",
        "id": "0017",
        "instructions": [
            "Adjust the machine to your desired weight and height settings.",
            "Grasp the handles with an overhand grip, slightly wider than shoulder-width apart.",
            "Hang with your arms fully extended and your feet off the ground.",
            "Engage your back muscles and pull your body up towards the handles, keeping your elbows close to your body.",
            "Continue pulling until your chin is above the handles.",
            "Pause for a moment at the top, then slowly lower your body back down to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "assisted pull-up",
        "secondaryMuscles": [
            "biceps",
            "forearms"
        ],
        "target": "lats"
    },
    {
        "bodyPart": "upper arms",
        "equipment": "assisted",
        "gifUrl": "https://v2.exercisedb.io/image/iP7jZkf6WWCH11",
        "id": "0018",
        "instructions": [
            "Stand with your feet shoulder-width apart and hold a towel with both hands behind your head.",
            "Keep your elbows close to your ears and your upper arms stationary.",
            "Slowly extend your forearms upward, squeezing your triceps at the top.",
            "Pause for a moment, then slowly lower the towel back down to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "assisted standing triceps extension (with towel)",
        "secondaryMuscles": [
            "shoulders"
        ],
        "target": "triceps"
    },
    {
        "bodyPart": "upper arms",
        "equipment": "leverage machine",
        "gifUrl": "https://v2.exercisedb.io/image/Msl54mZJ5vFhBz",
        "id": "0019",
        "instructions": [
            "Adjust the machine to your desired weight and height.",
            "Kneel down on the pad facing the machine, with your hands gripping the handles.",
            "Lower your body by bending your elbows, keeping your back straight and close to the machine.",
            "Pause for a moment at the bottom, then push yourself back up to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "assisted triceps dip (kneeling)",
        "secondaryMuscles": [
            "chest",
            "shoulders"
        ],
        "target": "triceps"
    },
    {
        "bodyPart": "upper legs",
        "equipment": "body weight",
        "gifUrl": "https://v2.exercisedb.io/image/Gfb4S7kpXAHy26",
        "id": "0020",
        "instructions": [
            "Place the balance board on a flat surface.",
            "Step onto the balance board with one foot, ensuring it is centered.",
            "Slowly shift your weight onto the foot on the balance board, keeping your core engaged.",
            "Maintain your balance and stability as you hold the position for a desired amount of time.",
            "Repeat the exercise with the other foot."
        ],
        "name": "balance board",
        "secondaryMuscles": [
            "calves",
            "hamstrings",
            "glutes"
        ],
        "target": "quads"
    },
    {
        "bodyPart": "back",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/Pn40PmJvILebq4",
        "id": "0022",
        "instructions": [
            "Lie flat on a bench with your head at one end and your feet on the ground.",
            "Hold the barbell with a pronated grip (palms facing away from you) and extend your arms straight above your chest.",
            "Keeping your arms straight, lower the barbell behind your head in an arc-like motion until you feel a stretch in your lats.",
            "Pause for a moment, then reverse the motion and press the barbell back to the starting position above your chest.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell pullover to press",
        "secondaryMuscles": [
            "triceps",
            "chest",
            "shoulders"
        ],
        "target": "lats"
    },
    {
        "bodyPart": "upper arms",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/MPXAa1tSu9qqyF",
        "id": "0023",
        "instructions": [
            "Stand up straight with your feet shoulder-width apart and hold a barbell in each hand, palms facing forward.",
            "Keep your upper arms stationary and exhale as you curl the weights while contracting your biceps.",
            "Continue to raise the barbells until your biceps are fully contracted and the barbells are at shoulder level.",
            "Hold the contracted position for a brief pause as you squeeze your biceps.",
            "Inhale as you slowly begin to lower the barbells back to the starting position.",
            "Repeat for the desired number of repetitions, alternating arms."
        ],
        "name": "barbell alternate biceps curl",
        "secondaryMuscles": [
            "forearms"
        ],
        "target": "biceps"
    },
    {
        "bodyPart": "upper legs",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/mvu88UTcdjN3JX",
        "id": "0024",
        "instructions": [
            "Start by standing with your feet shoulder-width apart and the barbell resting on your upper chest, just below your collarbone.",
            "Hold the barbell with an overhand grip, keeping your elbows up and your upper arms parallel to the ground.",
            "Lower your body down into a squat position by bending at the knees and hips, keeping your back straight and your chest up.",
            "Pause for a moment at the bottom of the squat, then push through your heels to return to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell bench front squat",
        "secondaryMuscles": [
            "hamstrings",
            "glutes",
            "calves"
        ],
        "target": "quads"
    },
    {
        "bodyPart": "chest",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/xYC6bMjThksgas",
        "id": "0025",
        "instructions": [
            "Lie flat on a bench with your feet flat on the ground and your back pressed against the bench.",
            "Grasp the barbell with an overhand grip slightly wider than shoulder-width apart.",
            "Lift the barbell off the rack and hold it directly above your chest with your arms fully extended.",
            "Lower the barbell slowly towards your chest, keeping your elbows tucked in.",
            "Pause for a moment when the barbell touches your chest.",
            "Push the barbell back up to the starting position by extending your arms.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell bench press",
        "secondaryMuscles": [
            "triceps",
            "shoulders"
        ],
        "target": "pectorals"
    },
    {
        "bodyPart": "upper legs",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/CxsBalI2aLuMuD",
        "id": "0026",
        "instructions": [
            "Set up a barbell on a squat rack at chest height.",
            "Stand facing away from the rack, with your feet shoulder-width apart.",
            "Bend your knees and lower your body down into a squat position, keeping your back straight and chest up.",
            "Grasp the barbell with an overhand grip, slightly wider than shoulder-width apart.",
            "Lift the barbell off the rack and step back, ensuring your feet are still shoulder-width apart.",
            "Lower your body down into a squat, keeping your knees in line with your toes.",
            "Pause for a moment at the bottom, then push through your heels to return to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell bench squat",
        "secondaryMuscles": [
            "glutes",
            "hamstrings",
            "calves"
        ],
        "target": "quads"
    },
    {
        "bodyPart": "back",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/t-CEkEroEzvxT2",
        "id": "0027",
        "instructions": [
            "Stand with your feet shoulder-width apart and knees slightly bent.",
            "Bend forward at the hips while keeping your back straight and chest up.",
            "Grasp the barbell with an overhand grip, hands slightly wider than shoulder-width apart.",
            "Pull the barbell towards your lower chest by retracting your shoulder blades and squeezing your back muscles.",
            "Pause for a moment at the top, then slowly lower the barbell back to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell bent over row",
        "secondaryMuscles": [
            "biceps",
            "forearms"
        ],
        "target": "upper back"
    },
    {
        "bodyPart": "upper legs",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/aeQJLYomrP9yxc",
        "id": "0028",
        "instructions": [
            "Stand with your feet shoulder-width apart and the barbell on the floor in front of you.",
            "Bend your knees and hinge at the hips to lower down and grip the barbell with an overhand grip, hands slightly wider than shoulder-width apart.",
            "Drive through your heels and extend your hips and knees to lift the barbell off the floor, keeping it close to your body.",
            "As the barbell reaches your thighs, explosively extend your hips, shrug your shoulders, and pull the barbell up towards your chest.",
            "As the barbell reaches chest height, quickly drop under it and catch it at shoulder level, with your elbows pointing forward and your palms facing up.",
            "From the catch position, press the barbell overhead by extending your arms and pushing the barbell straight up.",
            "Lower the barbell back down to the starting position and repeat for the desired number of repetitions."
        ],
        "name": "barbell clean and press",
        "secondaryMuscles": [
            "hamstrings",
            "glutes",
            "shoulders",
            "triceps"
        ],
        "target": "quads"
    },
    {
        "bodyPart": "upper legs",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/wJ4s35rZW1eE8s",
        "id": "0029",
        "instructions": [
            "Start by standing with your feet shoulder-width apart and the barbell resting on your upper chest, with your elbows pointing forward.",
            "Lower your body by bending your knees and pushing your hips back, as if you are sitting back into a chair.",
            "Keep your chest up and your back straight as you lower down, making sure your knees do not go past your toes.",
            "Continue lowering until your thighs are parallel to the ground, or as low as you can comfortably go.",
            "Pause for a moment at the bottom, then push through your heels to stand back up, extending your hips and knees.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell clean-grip front squat",
        "secondaryMuscles": [
            "quadriceps",
            "hamstrings",
            "calves",
            "core"
        ],
        "target": "glutes"
    },
    {
        "bodyPart": "upper arms",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/EVHkRE97AlXRqX",
        "id": "0030",
        "instructions": [
            "Lie flat on a bench with your feet flat on the ground and your back pressed against the bench.",
            "Grasp the barbell with a close grip, slightly narrower than shoulder-width apart.",
            "Unrack the barbell and lower it slowly towards your chest, keeping your elbows close to your body.",
            "Pause for a moment when the barbell touches your chest.",
            "Push the barbell back up to the starting position, fully extending your arms.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell close-grip bench press",
        "secondaryMuscles": [
            "chest",
            "shoulders"
        ],
        "target": "triceps"
    },
    {
        "bodyPart": "upper arms",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/x8jHR2wNdog7Zv",
        "id": "0031",
        "instructions": [
            "Stand up straight with your feet shoulder-width apart and hold a barbell with an underhand grip, palms facing forward.",
            "Keep your elbows close to your torso and exhale as you curl the weights while contracting your biceps.",
            "Continue to raise the bar until your biceps are fully contracted and the bar is at shoulder level.",
            "Hold the contracted position for a brief pause as you squeeze your biceps.",
            "Inhale as you slowly begin to lower the bar back to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell curl",
        "secondaryMuscles": [
            "forearms"
        ],
        "target": "biceps"
    },
    {
        "bodyPart": "upper legs",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/2fxfqA7usry8Y1",
        "id": "0032",
        "instructions": [
            "Stand with your feet shoulder-width apart and the barbell on the ground in front of you.",
            "Bend your knees and hinge at the hips to lower your torso and grip the barbell with an overhand grip, hands slightly wider than shoulder-width apart.",
            "Keep your back straight and chest lifted as you drive through your heels to lift the barbell off the ground, extending your hips and knees.",
            "As you stand up straight, squeeze your glutes and keep your core engaged.",
            "Lower the barbell back down to the ground by bending at the hips and knees, keeping your back straight.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell deadlift",
        "secondaryMuscles": [
            "hamstrings",
            "lower back"
        ],
        "target": "glutes"
    },
    {
        "bodyPart": "chest",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/VZWxc8GqCn-X8O",
        "id": "0033",
        "instructions": [
            "Lie on a decline bench with your feet secured and your head lower than your hips.",
            "Grasp the barbell with an overhand grip slightly wider than shoulder-width apart.",
            "Unrack the barbell and lower it slowly towards your chest, keeping your elbows tucked in.",
            "Pause for a moment at the bottom, then push the barbell back up to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell decline bench press",
        "secondaryMuscles": [
            "triceps",
            "shoulders"
        ],
        "target": "pectorals"
    },
    {
        "bodyPart": "back",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/Cc0EHPrEANxbnS",
        "id": "0034",
        "instructions": [
            "Lie down on a decline bench with your head lower than your hips and your feet secured.",
            "Hold a barbell with a pronated grip (palms facing away from you) and extend your arms straight above your chest.",
            "Lower the barbell behind your head in a controlled manner, keeping your arms slightly bent.",
            "Pause for a moment, then raise the barbell back to the starting position by contracting your lats.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell decline bent arm pullover",
        "secondaryMuscles": [
            "triceps",
            "chest"
        ],
        "target": "lats"
    },
    {
        "bodyPart": "upper arms",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/Zj35YtahVZghf2",
        "id": "0035",
        "instructions": [
            "Lie on a decline bench with your head lower than your feet and hold a barbell with a close grip.",
            "Lower the barbell towards your forehead by bending your elbows, keeping your upper arms stationary.",
            "Pause for a moment, then extend your arms to press the barbell back up to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell decline close grip to skull press",
        "secondaryMuscles": [
            "chest",
            "shoulders"
        ],
        "target": "triceps"
    },
    {
        "bodyPart": "chest",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/W5jIHIN3lcSFp8",
        "id": "0036",
        "instructions": [
            "Lie on a decline bench with your feet secured and your head lower than your hips.",
            "Grasp the barbell with a wide grip, slightly wider than shoulder-width apart.",
            "Lower the barbell to your chest, keeping your elbows out to the sides.",
            "Push the barbell back up to the starting position, fully extending your arms.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell decline wide-grip press",
        "secondaryMuscles": [
            "triceps",
            "shoulders"
        ],
        "target": "pectorals"
    },
    {
        "bodyPart": "back",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/GW2SEJAtrOfT4w",
        "id": "0037",
        "instructions": [
            "Lie on a decline bench with your head lower than your hips and your feet secured.",
            "Hold a barbell with a wide grip and extend your arms straight above your chest.",
            "Lower the barbell behind your head in a controlled manner, keeping your arms straight.",
            "Pause for a moment, then raise the barbell back to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell decline wide-grip pullover",
        "secondaryMuscles": [
            "triceps",
            "chest"
        ],
        "target": "lats"
    },
    {
        "bodyPart": "upper arms",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/hvn0ABfINT3Bgj",
        "id": "0038",
        "instructions": [
            "Stand with your feet shoulder-width apart and hold a barbell with an underhand grip, palms facing up.",
            "Let the barbell hang at arm's length in front of your thighs.",
            "Keeping your upper arms stationary, curl the barbell up towards your chest by contracting your biceps.",
            "Pause for a moment at the top, then slowly lower the barbell back down to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell drag curl",
        "secondaryMuscles": [
            "forearms"
        ],
        "target": "biceps"
    },
    {
        "bodyPart": "upper legs",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/UB05k00MOKEbBr",
        "id": "0039",
        "instructions": [
            "Start by standing with your feet shoulder-width apart, toes slightly turned out.",
            "Hold the barbell in front of your chest with your hands shoulder-width apart, elbows pointing forward.",
            "Engage your core and keep your chest up as you lower your body down into a squat position, pushing your hips back and bending your knees.",
            "Lower until your thighs are parallel to the ground, or as low as you can comfortably go.",
            "Pause for a moment at the bottom, then push through your heels to return to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell front chest squat",
        "secondaryMuscles": [
            "quadriceps",
            "hamstrings",
            "calves",
            "core"
        ],
        "target": "glutes"
    },
    {
        "bodyPart": "chest",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/vd5qc2wbvOqIu3",
        "id": "0040",
        "instructions": [
            "Stand with your feet shoulder-width apart and hold a barbell with an overhand grip, palms facing down.",
            "Keep your arms straight and raise the barbell in front of you until it reaches shoulder height.",
            "Pause for a moment at the top, then slowly lower the barbell back down to the starting position.",
            "Next, lower the barbell behind your head, keeping your arms straight.",
            "Pause for a moment at the bottom, then raise the barbell back up to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell front raise and pullover",
        "secondaryMuscles": [
            "deltoids",
            "triceps"
        ],
        "target": "pectorals"
    },
    {
        "bodyPart": "shoulders",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/mAeUeorvlF6NeM",
        "id": "0041",
        "instructions": [
            "Stand with your feet shoulder-width apart and hold a barbell in front of your thighs with an overhand grip.",
            "Keep your arms straight and lift the barbell forward and upward until it reaches shoulder level.",
            "Pause for a moment at the top, then slowly lower the barbell back down to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell front raise",
        "secondaryMuscles": [
            "biceps",
            "triceps"
        ],
        "target": "delts"
    },
    {
        "bodyPart": "upper legs",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/ExJeYRj9pZ7NUw",
        "id": "0042",
        "instructions": [
            "Start by standing with your feet shoulder-width apart, toes slightly turned out.",
            "Hold the barbell in front of your shoulders, resting it on your collarbone and shoulders.",
            "Engage your core and keep your chest up as you lower your body down into a squat position, pushing your hips back and bending your knees.",
            "Lower until your thighs are parallel to the ground, or as low as you can comfortably go.",
            "Pause for a moment at the bottom, then push through your heels to return to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell front squat",
        "secondaryMuscles": [
            "quadriceps",
            "hamstrings",
            "calves",
            "core"
        ],
        "target": "glutes"
    },
    {
        "bodyPart": "upper legs",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/rBs-oOLnczaK9Q",
        "id": "0043",
        "instructions": [
            "Stand with your feet shoulder-width apart, toes slightly turned out.",
            "Hold the barbell across your upper back, resting it on your traps or rear delts.",
            "Engage your core and keep your chest up as you begin to lower your body down.",
            "Bend at the knees and hips, pushing your hips back and down as if sitting into a chair.",
            "Lower yourself until your thighs are parallel to the ground or slightly below.",
            "Keep your knees in line with your toes and your weight in your heels.",
            "Drive through your heels to stand back up, extending your hips and knees.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell full squat",
        "secondaryMuscles": [
            "quadriceps",
            "hamstrings",
            "calves",
            "core"
        ],
        "target": "glutes"
    },
    {
        "bodyPart": "upper legs",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/dqmgbLixn3LelM",
        "id": "0044",
        "instructions": [
            "Start by standing with your feet shoulder-width apart and the barbell resting on your upper back.",
            "Keeping your back straight and your core engaged, hinge forward at the hips, pushing your buttocks back as if you were trying to touch the wall behind you with your glutes.",
            "Lower your torso until it is parallel to the ground, feeling a stretch in your hamstrings.",
            "Pause for a moment, then return to the starting position by squeezing your glutes and pushing your hips forward.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell good morning",
        "secondaryMuscles": [
            "lower back"
        ],
        "target": "hamstrings"
    },
    {
        "bodyPart": "chest",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/GtVgev5Id6T4Be",
        "id": "0045",
        "instructions": [
            "Lie flat on a bench with your feet flat on the ground and your back pressed against the bench.",
            "Grasp the barbell with an overhand grip, slightly wider than shoulder-width apart.",
            "Lower the barbell slowly towards your neck, keeping your elbows pointed outwards.",
            "Pause for a moment when the barbell is just above your neck.",
            "Push the barbell back up to the starting position, fully extending your arms.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell guillotine bench press",
        "secondaryMuscles": [
            "shoulders",
            "triceps"
        ],
        "target": "pectorals"
    },
    {
        "bodyPart": "upper legs",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/mSWeWuXVBfVVHV",
        "id": "0046",
        "instructions": [
            "Start by standing with your feet shoulder-width apart and your toes slightly turned out.",
            "Hold the barbell behind your legs, resting it on your upper thighs.",
            "Lower your body by bending at the knees and hips, keeping your back straight and your chest up.",
            "Continue lowering until your thighs are parallel to the ground, or as low as you can comfortably go.",
            "Pause for a moment, then push through your heels to return to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell hack squat",
        "secondaryMuscles": [
            "quadriceps",
            "hamstrings",
            "calves"
        ],
        "target": "glutes"
    },
    {
        "bodyPart": "chest",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/RUs5BfVBnozcz7",
        "id": "0047",
        "instructions": [
            "Set up an incline bench at a 45-degree angle.",
            "Lie down on the bench with your feet flat on the ground.",
            "Grasp the barbell with an overhand grip, slightly wider than shoulder-width apart.",
            "Unrack the barbell and lower it slowly towards your chest, keeping your elbows at a 45-degree angle.",
            "Pause for a moment at the bottom, then push the barbell back up to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell incline bench press",
        "secondaryMuscles": [
            "shoulders",
            "triceps"
        ],
        "target": "pectorals"
    },
    {
        "bodyPart": "upper arms",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/aDF7MB5pOJJAWK",
        "id": "0048",
        "instructions": [
            "Set up an incline bench at a 45-degree angle.",
            "Lie back on the bench and grasp the barbell with a reverse grip, hands slightly wider than shoulder-width apart.",
            "Unrack the barbell and lower it towards your upper chest, keeping your elbows tucked in.",
            "Pause for a moment at the bottom, then push the barbell back up to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell incline reverse-grip press",
        "secondaryMuscles": [
            "chest",
            "shoulders"
        ],
        "target": "triceps"
    },
    {
        "bodyPart": "back",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/LWaAwg47Nk0N8i",
        "id": "0049",
        "instructions": [
            "Set up an incline bench at a 45-degree angle.",
            "Lie face down on the bench with your chest against the pad and your feet flat on the ground.",
            "Grasp the barbell with an overhand grip, slightly wider than shoulder-width apart.",
            "Keep your back straight and your core engaged.",
            "Pull the barbell towards your chest, squeezing your shoulder blades together.",
            "Pause for a moment at the top, then slowly lower the barbell back to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell incline row",
        "secondaryMuscles": [
            "biceps",
            "forearms"
        ],
        "target": "upper back"
    },
    {
        "bodyPart": "chest",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/AlgnoWuvxiR3Vz",
        "id": "0050",
        "instructions": [
            "Set up an incline bench at a 45-degree angle.",
            "Sit on the bench with your back against the pad and feet flat on the ground.",
            "Hold a barbell with an overhand grip, slightly wider than shoulder-width apart.",
            "Lift the barbell up to shoulder height, keeping your elbows slightly bent.",
            "Slowly raise the barbell overhead, extending your arms fully.",
            "Pause for a moment at the top, then slowly lower the barbell back to shoulder height.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell incline shoulder raise",
        "secondaryMuscles": [
            "deltoids",
            "trapezius"
        ],
        "target": "serratus anterior"
    },
    {
        "bodyPart": "upper legs",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/pLUGgsH-NI4s3E",
        "id": "0051",
        "instructions": [
            "Stand with your feet shoulder-width apart and toes slightly turned out.",
            "Hold the barbell with an overhand grip, resting it on the front of your body, just below your waist.",
            "Step your left foot forward and your right foot back, keeping your feet shoulder-width apart.",
            "Bend your knees and lower your body down into a squat position, keeping your back straight and chest up.",
            "Push through your heels to stand back up to the starting position.",
            "Repeat the movement, alternating your forward and back foot with each repetition."
        ],
        "name": "barbell jefferson squat",
        "secondaryMuscles": [
            "quadriceps",
            "hamstrings",
            "calves"
        ],
        "target": "glutes"
    },
    {
        "bodyPart": "upper arms",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/ol2rEivQMwkQet",
        "id": "0052",
        "instructions": [
            "Lie flat on a bench with your feet flat on the ground and your back pressed against the bench.",
            "Grasp the barbell with an overhand grip, slightly wider than shoulder-width apart.",
            "Lower the barbell to your chest, keeping your elbows tucked in close to your body.",
            "Push the barbell back up to the starting position, fully extending your arms.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell jm bench press",
        "secondaryMuscles": [
            "chest",
            "shoulders"
        ],
        "target": "triceps"
    },
    {
        "bodyPart": "upper legs",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/GXRNQrNNqglv2h",
        "id": "0053",
        "instructions": [
            "Start by standing with your feet shoulder-width apart, holding a barbell across your upper back.",
            "Lower your body into a squat position by bending your knees and pushing your hips back.",
            "Once you reach the bottom of the squat, explode upwards by jumping off the ground.",
            "As you jump, extend your hips, knees, and ankles, pushing through your toes.",
            "Land softly back into the squat position and immediately repeat the movement for the desired number of repetitions."
        ],
        "name": "barbell jump squat",
        "secondaryMuscles": [
            "quadriceps",
            "hamstrings",
            "calves"
        ],
        "target": "glutes"
    },
    {
        "bodyPart": "upper legs",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/82RS9xCZuEdzZu",
        "id": "0054",
        "instructions": [
            "Start by standing with your feet shoulder-width apart and a barbell resting on your upper back.",
            "Take a step forward with your right foot, keeping your torso upright.",
            "Lower your body by bending your right knee until your thigh is parallel to the ground.",
            "Push through your right heel to return to the starting position.",
            "Repeat with your left leg, alternating legs for the desired number of repetitions."
        ],
        "name": "barbell lunge",
        "secondaryMuscles": [
            "quadriceps",
            "hamstrings",
            "calves"
        ],
        "target": "glutes"
    },
    {
        "bodyPart": "upper arms",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/7yGknjceLav98d",
        "id": "0055",
        "instructions": [
            "Lie flat on a bench with your feet flat on the ground and your back pressed against the bench.",
            "Grasp the barbell with a close grip, hands shoulder-width apart, palms facing towards your feet.",
            "Lift the barbell off the rack and hold it directly above your chest with your arms fully extended.",
            "Slowly lower the barbell towards your chest, keeping your elbows close to your body.",
            "Pause for a moment when the barbell touches your chest, then push it back up to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell lying close-grip press",
        "secondaryMuscles": [
            "chest",
            "shoulders"
        ],
        "target": "triceps"
    },
    {
        "bodyPart": "upper arms",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/JKF0tAzc--HoxC",
        "id": "0056",
        "instructions": [
            "Lie flat on a bench with your feet flat on the ground and your head at the end of the bench.",
            "Grasp the barbell with a close grip, hands shoulder-width apart, palms facing up.",
            "Extend your arms fully, lifting the barbell above your chest.",
            "Keeping your upper arms stationary, slowly lower the barbell towards your forehead by bending your elbows.",
            "Pause for a moment at the bottom, then extend your arms back to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell lying close-grip triceps extension",
        "secondaryMuscles": [
            "shoulders"
        ],
        "target": "triceps"
    },
    {
        "bodyPart": "upper arms",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/6d18K0fKgbH4Kf",
        "id": "0057",
        "instructions": [
            "Lie flat on a bench with your feet flat on the ground and your head at the end of the bench.",
            "Hold the barbell with an overhand grip, hands shoulder-width apart, and extend your arms straight up over your chest.",
            "Keeping your upper arms stationary, slowly lower the barbell towards your forehead by bending your elbows.",
            "Pause for a moment, then extend your arms back up to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell lying extension",
        "secondaryMuscles": [
            "shoulders"
        ],
        "target": "triceps"
    },
    {
        "bodyPart": "upper legs",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/Zt9Of6h5EuprtM",
        "id": "0058",
        "instructions": [
            "Lie flat on your back on a bench with your feet flat on the ground and your knees bent.",
            "Hold the barbell with an overhand grip and position it on your hips.",
            "Engaging your glutes, lift your hips off the bench until your body forms a straight line from your knees to your shoulders.",
            "Pause for a moment at the top, then slowly lower your hips back down to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell lying lifting (on hip)",
        "secondaryMuscles": [
            "hamstrings",
            "quadriceps"
        ],
        "target": "glutes"
    },
    {
        "bodyPart": "upper arms",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/6tbRbr1Fjb6rEw",
        "id": "0059",
        "instructions": [
            "Sit on a preacher bench with your chest against the pad and your arms extended over the edge, holding a barbell with an underhand grip.",
            "Keeping your upper arms stationary, exhale and curl the weights while contracting your biceps.",
            "Continue to raise the bar until your biceps are fully contracted and the bar is at shoulder level.",
            "Hold the contracted position for a brief pause as you squeeze your biceps.",
            "Inhale and slowly begin to lower the barbell back to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell lying preacher curl",
        "secondaryMuscles": [
            "forearms"
        ],
        "target": "biceps"
    },
    {
        "bodyPart": "upper arms",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/YdjQe0kzysC1-p",
        "id": "0060",
        "instructions": [
            "Lie flat on a bench with your feet flat on the ground and your head at the end of the bench.",
            "Hold the barbell with an overhand grip, hands shoulder-width apart, and extend your arms straight up over your chest.",
            "Keeping your upper arms stationary, slowly lower the barbell towards your forehead by bending your elbows.",
            "Pause for a moment when the barbell is just above your forehead, then extend your arms back up to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell lying triceps extension skull crusher",
        "secondaryMuscles": [
            "shoulders"
        ],
        "target": "triceps"
    },
    {
        "bodyPart": "upper arms",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/AkpfmPwBDV36hN",
        "id": "0061",
        "instructions": [
            "Lie flat on a bench with your feet flat on the ground and your head at the end of the bench.",
            "Hold the barbell with an overhand grip, hands shoulder-width apart, and extend your arms straight up over your chest.",
            "Keeping your upper arms stationary, slowly lower the barbell towards your forehead by bending your elbows.",
            "Pause for a moment at the bottom, then extend your arms back up to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell lying triceps extension",
        "secondaryMuscles": [
            "shoulders"
        ],
        "target": "triceps"
    },
    {
        "bodyPart": "upper legs",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/lhzXNGPPRaVSUh",
        "id": "0063",
        "instructions": [
            "Stand with your feet shoulder-width apart and toes pointing slightly outward.",
            "Hold the barbell across your upper back, resting it on your traps or rear delts.",
            "Engage your core and keep your chest up as you slowly lower your body by bending your knees and pushing your hips back.",
            "Continue lowering until your thighs are parallel to the ground or slightly below.",
            "Pause for a moment, then push through your heels to return to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell narrow stance squat",
        "secondaryMuscles": [
            "quadriceps",
            "hamstrings",
            "calves"
        ],
        "target": "glutes"
    },
    {
        "bodyPart": "back",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/JzpvauOJendVHM",
        "id": "0064",
        "instructions": [
            "Stand with your feet shoulder-width apart, knees slightly bent, and hold a barbell with one hand using an overhand grip.",
            "Bend forward at the hips, keeping your back straight and your head in a neutral position.",
            "Pull the barbell up towards your chest, keeping your elbow close to your body and squeezing your shoulder blades together.",
            "Lower the barbell back down to the starting position in a controlled manner.",
            "Repeat for the desired number of repetitions, then switch to the other arm."
        ],
        "name": "barbell one arm bent over row",
        "secondaryMuscles": [
            "biceps",
            "forearms"
        ],
        "target": "upper back"
    },
    {
        "bodyPart": "upper arms",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/LZtud8NyixQimu",
        "id": "0065",
        "instructions": [
            "Lie flat on your back on the floor with your knees bent and feet flat on the ground.",
            "Hold the barbell with one hand, palm facing up, and extend your arm straight up over your chest.",
            "Slowly lower the barbell towards your chest, keeping your elbow close to your body.",
            "Pause for a moment at the bottom, then push the barbell back up to the starting position.",
            "Repeat for the desired number of repetitions, then switch arms."
        ],
        "name": "barbell one arm floor press",
        "secondaryMuscles": [
            "chest",
            "shoulders"
        ],
        "target": "triceps"
    },
    {
        "bodyPart": "upper legs",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/TdZpn7g41EzFG7",
        "id": "0066",
        "instructions": [
            "Stand with your feet shoulder-width apart, holding a barbell in one hand with an overhand grip.",
            "Keep your back straight and your core engaged.",
            "Bend at the hips and lower the barbell towards the outside of your leg, keeping your arm straight and your chest up.",
            "Lower the barbell as far as you can while maintaining good form.",
            "Pause for a moment, then slowly return to the starting position.",
            "Repeat for the desired number of repetitions, then switch sides."
        ],
        "name": "barbell one arm side deadlift",
        "secondaryMuscles": [
            "hamstrings",
            "quadriceps",
            "lower back"
        ],
        "target": "glutes"
    },
    {
        "bodyPart": "shoulders",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/yffhJ3Nxnvz5-K",
        "id": "0067",
        "instructions": [
            "Stand with your feet shoulder-width apart, toes pointing slightly outwards.",
            "Hold the barbell with an overhand grip, hands slightly wider than shoulder-width apart.",
            "Bend your knees and lower your hips into a squat position, keeping your back straight and chest up.",
            "Explosively extend your hips, knees, and ankles, driving the barbell upwards.",
            "As the barbell reaches chest level, pull it upwards with your arm, keeping it close to your body.",
            "Rotate your elbow under the barbell and extend your arm fully overhead, locking out your elbow.",
            "Lower the barbell back down to the starting position in a controlled manner.",
            "Repeat for the desired number of repetitions, then switch arms."
        ],
        "name": "barbell one arm snatch",
        "secondaryMuscles": [
            "traps",
            "forearms",
            "core"
        ],
        "target": "delts"
    },
    {
        "bodyPart": "upper legs",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/fw6IXgV-rdeWDw",
        "id": "0068",
        "instructions": [
            "Stand with your feet shoulder-width apart and hold a barbell across your upper back.",
            "Lift one foot off the ground and extend it forward, keeping it parallel to the ground.",
            "Bend your standing leg and lower your body down as if sitting back into a chair, keeping your chest up and your back straight.",
            "Lower yourself until your thigh is parallel to the ground, then push through your heel to return to the starting position.",
            "Repeat for the desired number of repetitions, then switch legs and repeat."
        ],
        "name": "barbell one leg squat",
        "secondaryMuscles": [
            "glutes",
            "hamstrings",
            "calves"
        ],
        "target": "quads"
    },
    {
        "bodyPart": "upper legs",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/lX1lSEDRA6gLvF",
        "id": "0069",
        "instructions": [
            "Stand with your feet shoulder-width apart and toes slightly turned out.",
            "Hold the barbell with a wide grip, positioning it overhead with your arms fully extended.",
            "Engage your core and lower your body down into a squat position, keeping your chest up and knees tracking over your toes.",
            "Pause for a moment at the bottom, then push through your heels to return to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell overhead squat",
        "secondaryMuscles": [
            "glutes",
            "hamstrings",
            "calves",
            "core"
        ],
        "target": "quads"
    },
    {
        "bodyPart": "upper arms",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/s1hnIkWMG3dx4a",
        "id": "0070",
        "instructions": [
            "Sit on a preacher bench with your upper arms resting on the pad and your chest against the support.",
            "Grasp the barbell with an underhand grip, slightly wider than shoulder-width apart.",
            "Keeping your upper arms stationary, exhale and curl the barbell up towards your shoulders.",
            "Pause for a moment at the top, squeezing your biceps.",
            "Inhale and slowly lower the barbell back down to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell preacher curl",
        "secondaryMuscles": [
            "forearms"
        ],
        "target": "biceps"
    },
    {
        "bodyPart": "waist",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/-rpMjEPnycorXS",
        "id": "0071",
        "instructions": [
            "Lie flat on your back on a mat with your knees bent and feet flat on the ground.",
            "Hold the barbell with an overhand grip, resting it on your chest.",
            "Engaging your abs, slowly lift your upper body off the ground, curling forward until your torso is at a 45-degree angle.",
            "Pause for a moment at the top, then slowly lower your upper body back down to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell press sit-up",
        "secondaryMuscles": [
            "shoulders",
            "chest"
        ],
        "target": "abs"
    },
    {
        "bodyPart": "upper arms",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/fSfI5ZYDHg9fe6",
        "id": "0072",
        "instructions": [
            "Set up an incline bench at a 45-degree angle.",
            "Lie face down on the bench with your chest and stomach resting against it.",
            "Hold a barbell with an underhand grip, shoulder-width apart.",
            "Extend your arms fully, allowing the barbell to hang down towards the floor.",
            "Keeping your upper arms stationary, exhale and curl the weights while contracting your biceps.",
            "Continue to raise the barbell until your biceps are fully contracted and the bar is at shoulder level.",
            "Hold the contracted position for a brief pause as you squeeze your biceps.",
            "Inhale and slowly begin to lower the barbell back to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell prone incline curl",
        "secondaryMuscles": [
            "forearms"
        ],
        "target": "biceps"
    },
    {
        "bodyPart": "back",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/2Byuvz-Cw7ABbr",
        "id": "0073",
        "instructions": [
            "Lie flat on a bench with your head at one end and your feet on the floor.",
            "Hold a barbell with a shoulder-width grip and extend your arms straight above your chest.",
            "Keeping your arms straight, lower the barbell behind your head in a controlled manner until you feel a stretch in your lats.",
            "Pause for a moment, then raise the barbell back to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell pullover",
        "secondaryMuscles": [
            "chest",
            "triceps"
        ],
        "target": "lats"
    },
    {
        "bodyPart": "upper legs",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/KirG-CxuQ9HRGt",
        "id": "0074",
        "instructions": [
            "Set up a barbell on a rack at knee height.",
            "Stand with your feet shoulder-width apart, toes pointing slightly outwards.",
            "Bend at the hips and knees to lower yourself down and grip the barbell with an overhand grip, hands shoulder-width apart.",
            "Engage your core and lift the barbell by extending your hips and knees, pulling your shoulders back and squeezing your glutes at the top.",
            "Lower the barbell back down to the starting position by bending at the hips and knees.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell rack pull",
        "secondaryMuscles": [
            "hamstrings",
            "lower back"
        ],
        "target": "glutes"
    },
    {
        "bodyPart": "shoulders",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/h3Vobx40BVmv86",
        "id": "0075",
        "instructions": [
            "Stand with your feet shoulder-width apart and hold a barbell with an overhand grip, palms facing down.",
            "Bend your knees slightly and hinge forward at the hips, keeping your back straight.",
            "Raise the barbell out to the sides, keeping your arms straight, until they are parallel to the ground.",
            "Pause for a moment at the top, then slowly lower the barbell back to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell rear delt raise",
        "secondaryMuscles": [
            "traps",
            "rhomboids"
        ],
        "target": "delts"
    },
    {
        "bodyPart": "shoulders",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/2YgrIDWEGjlf3t",
        "id": "0076",
        "instructions": [
            "Stand with your feet shoulder-width apart and knees slightly bent.",
            "Hold a barbell with an overhand grip, hands slightly wider than shoulder-width apart.",
            "Bend forward at the hips, keeping your back straight and chest up.",
            "Pull the barbell towards your chest, squeezing your shoulder blades together.",
            "Pause for a moment at the top, then slowly lower the barbell back to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell rear delt row",
        "secondaryMuscles": [
            "trapezius",
            "rhomboids",
            "biceps"
        ],
        "target": "delts"
    },
    {
        "bodyPart": "upper legs",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/HQpdNXJi9vTblx",
        "id": "0077",
        "instructions": [
            "Stand with your feet shoulder-width apart and hold a barbell across your upper back.",
            "Take a step backward with your right foot, landing on the ball of your foot.",
            "Bend both knees to lower your body until your left thigh is parallel to the ground.",
            "Push through your left heel to return to the starting position.",
            "Repeat with the other leg."
        ],
        "name": "barbell rear lunge v. 2",
        "secondaryMuscles": [
            "quadriceps",
            "hamstrings",
            "calves"
        ],
        "target": "glutes"
    },
    {
        "bodyPart": "upper legs",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/V4u9o2IYghO82z",
        "id": "0078",
        "instructions": [
            "Start by standing with your feet shoulder-width apart and a barbell resting on your upper back.",
            "Take a step backward with your right foot, landing on the ball of your foot.",
            "Bend both knees to lower your body until your left thigh is parallel to the ground.",
            "Push through your left heel to return to the starting position.",
            "Repeat with the other leg."
        ],
        "name": "barbell rear lunge",
        "secondaryMuscles": [
            "quadriceps",
            "hamstrings",
            "calves"
        ],
        "target": "glutes"
    },
    {
        "bodyPart": "lower arms",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/lturz6Ry-Mo0iu",
        "id": "0079",
        "instructions": [
            "Sit on a bench with your feet flat on the ground and your knees bent.",
            "Hold a barbell with an overhand grip, palms facing down, and your hands shoulder-width apart.",
            "Rest your forearms on your thighs, allowing your wrists to hang off the edge.",
            "Keeping your forearms stationary, exhale and curl your wrists upward as far as possible.",
            "Hold the contracted position for a brief pause, then inhale and slowly lower the barbell back to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell revers wrist curl v. 2",
        "secondaryMuscles": [
            "biceps",
            "brachialis"
        ],
        "target": "forearms"
    },
    {
        "bodyPart": "upper arms",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/Yv4lht6QFNdk79",
        "id": "0080",
        "instructions": [
            "Stand up straight with your feet shoulder-width apart and hold a barbell with an overhand grip, palms facing down.",
            "Keep your upper arms stationary and exhale as you curl the barbell upward, contracting your biceps.",
            "Continue to raise the barbell until your biceps are fully contracted and the barbell is at shoulder level.",
            "Hold the contracted position for a brief pause as you squeeze your biceps.",
            "Inhale as you slowly lower the barbell back to the starting position, keeping your upper arms stationary.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell reverse curl",
        "secondaryMuscles": [
            "forearms"
        ],
        "target": "biceps"
    },
    {
        "bodyPart": "upper arms",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/wyFARN37tJ88O5",
        "id": "0081",
        "instructions": [
            "Sit on a preacher bench with your chest against the pad and your arms extended straight down, holding a barbell with an overhand grip.",
            "Keeping your upper arms stationary, exhale and curl the barbell upward while contracting your biceps.",
            "Continue to raise the barbell until your biceps are fully contracted and the barbell is at shoulder level.",
            "Hold the contracted position for a brief pause as you squeeze your biceps.",
            "Inhale and slowly lower the barbell back to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell reverse preacher curl",
        "secondaryMuscles": [
            "forearms"
        ],
        "target": "biceps"
    },
    {
        "bodyPart": "lower arms",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/uAcrT13y-mXDJw",
        "id": "0082",
        "instructions": [
            "Sit on a bench with your feet flat on the ground and hold a barbell with an overhand grip, palms facing down.",
            "Rest your forearms on your thighs, allowing your wrists to hang off the edge.",
            "Slowly curl your wrists upward, bringing the barbell towards your body.",
            "Pause for a moment at the top, then slowly lower the barbell back down to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell reverse wrist curl",
        "secondaryMuscles": [
            "biceps",
            "brachialis"
        ],
        "target": "forearms"
    },
    {
        "bodyPart": "waist",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/87dxDsvIOxSAMK",
        "id": "0083",
        "instructions": [
            "Start by kneeling on the floor with a barbell placed on a bench in front of you.",
            "Grasp the barbell with an overhand grip, slightly wider than shoulder-width apart.",
            "Keeping your core engaged and your back straight, slowly roll the barbell forward, extending your arms in front of you.",
            "Continue rolling the barbell forward until your body is fully extended and your arms are overhead.",
            "Pause for a moment at the fully extended position, then slowly roll the barbell back towards your body, returning to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell rollerout from bench",
        "secondaryMuscles": [
            "shoulders",
            "triceps"
        ],
        "target": "abs"
    },
    {
        "bodyPart": "waist",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/MdGHctp7toEbo2",
        "id": "0084",
        "instructions": [
            "Kneel on the floor and hold a barbell with both hands, shoulder-width apart.",
            "Roll the barbell forward, extending your arms and keeping your core engaged.",
            "Continue rolling forward until your body is fully extended and your arms are overhead.",
            "Pause for a moment, then slowly roll the barbell back towards your knees, maintaining control.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell rollerout",
        "secondaryMuscles": [
            "lower back"
        ],
        "target": "abs"
    },
    {
        "bodyPart": "upper legs",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/Rlos6voiJQXUjV",
        "id": "0085",
        "instructions": [
            "Stand with your feet shoulder-width apart and your toes pointing forward.",
            "Hold the barbell with an overhand grip, hands slightly wider than shoulder-width apart.",
            "Bend at the hips, keeping your back straight and your knees slightly bent.",
            "Lower the barbell towards the ground, keeping it close to your body.",
            "Feel the stretch in your hamstrings as you lower the barbell.",
            "Once you feel a stretch in your hamstrings, push your hips forward and stand up straight.",
            "Squeeze your glutes at the top of the movement.",
            "Lower the barbell back down to the starting position and repeat for the desired number of repetitions."
        ],
        "name": "barbell romanian deadlift",
        "secondaryMuscles": [
            "hamstrings",
            "lower back"
        ],
        "target": "glutes"
    },
    {
        "bodyPart": "shoulders",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/-Ino4kMVVetLot",
        "id": "0086",
        "instructions": [
            "Sit on a bench with your back straight and feet flat on the ground.",
            "Hold the barbell with an overhand grip, slightly wider than shoulder-width apart.",
            "Lift the barbell off the rack and bring it down to shoulder level, behind your head.",
            "Press the barbell upward until your arms are fully extended.",
            "Lower the barbell back down to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell seated behind head military press",
        "secondaryMuscles": [
            "triceps",
            "upper back"
        ],
        "target": "delts"
    },
    {
        "bodyPart": "shoulders",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/RKKoCvAantKZWN",
        "id": "0087",
        "instructions": [
            "Sit on a bench with your back straight and feet flat on the ground.",
            "Hold the barbell with an overhand grip, slightly wider than shoulder-width apart.",
            "Lift the barbell to shoulder height, keeping your elbows slightly bent and pointing forward.",
            "Press the barbell overhead, fully extending your arms.",
            "Lower the barbell back to shoulder height and repeat for the desired number of repetitions."
        ],
        "name": "barbell seated bradford rocky press",
        "secondaryMuscles": [
            "triceps",
            "upper back"
        ],
        "target": "delts"
    },
    {
        "bodyPart": "lower legs",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/oyoGN5zk0mlrjm",
        "id": "0088",
        "instructions": [
            "Sit on a bench with your feet flat on the floor and a barbell resting on your thighs.",
            "Place the balls of your feet on a raised platform, such as a block or step.",
            "Position the barbell across your thighs and hold it securely with your hands.",
            "Keeping your back straight and your core engaged, lift your heels off the ground by extending your ankles.",
            "Pause for a moment at the top, then slowly lower your heels back down to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell seated calf raise",
        "secondaryMuscles": [
            "hamstrings",
            "quadriceps"
        ],
        "target": "calves"
    },
    {
        "bodyPart": "upper arms",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/F2XQMSBBGQMLvu",
        "id": "0089",
        "instructions": [
            "Sit on a bench with your feet flat on the floor and hold a barbell with an underhand grip, hands shoulder-width apart.",
            "Rest your upper arms against your inner thighs, just above your knees, and let the barbell hang down in front of you.",
            "Keeping your upper arms stationary, exhale and curl the barbell up towards your shoulders, contracting your biceps.",
            "Hold the contracted position for a brief pause, then inhale and slowly lower the barbell back down to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell seated close-grip concentration curl",
        "secondaryMuscles": [
            "forearms"
        ],
        "target": "biceps"
    },
    {
        "bodyPart": "upper legs",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/ntBS-AN7q4Hbm5",
        "id": "0090",
        "instructions": [
            "Sit on a bench with your feet flat on the ground and a barbell resting on your upper back.",
            "Keep your back straight and your chest up.",
            "Slowly hinge forward at the hips, lowering your torso towards the ground.",
            "Pause for a moment at the bottom, then push through your heels to return to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell seated good morning",
        "secondaryMuscles": [
            "hamstrings",
            "lower back"
        ],
        "target": "glutes"
    },
    {
        "bodyPart": "shoulders",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/IEbZkHWbnKtwZt",
        "id": "0091",
        "instructions": [
            "Sit on a bench with your back straight and feet flat on the ground.",
            "Hold the barbell with an overhand grip, slightly wider than shoulder-width apart.",
            "Lift the barbell off the rack and bring it to shoulder level, with your elbows bent and palms facing forward.",
            "Press the barbell overhead by extending your arms fully.",
            "Pause for a moment at the top, then slowly lower the barbell back to shoulder level.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell seated overhead press",
        "secondaryMuscles": [
            "triceps",
            "upper back"
        ],
        "target": "delts"
    },
    {
        "bodyPart": "upper arms",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/mh6-SG0h-mXN1N",
        "id": "0092",
        "instructions": [
            "Sit on a bench with your back straight and feet flat on the ground.",
            "Hold a barbell with an overhand grip, hands shoulder-width apart, and raise it overhead.",
            "Lower the barbell behind your head by bending your elbows, keeping your upper arms close to your head.",
            "Pause for a moment, then extend your arms to raise the barbell back to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell seated overhead triceps extension",
        "secondaryMuscles": [
            "shoulders"
        ],
        "target": "triceps"
    },
    {
        "bodyPart": "waist",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/3Q3ivv7pKOQmSi",
        "id": "0094",
        "instructions": [
            "Sit on a flat bench with your feet flat on the ground and your knees bent.",
            "Hold a barbell with both hands in front of your chest, keeping your elbows slightly bent.",
            "Engage your core and slowly twist your torso to one side, keeping your back straight.",
            "Pause for a moment at the end of the twist, then slowly rotate back to the starting position.",
            "Repeat the twist to the other side.",
            "Continue alternating sides for the desired number of repetitions."
        ],
        "name": "barbell seated twist",
        "secondaryMuscles": [
            "obliques",
            "lower back"
        ],
        "target": "abs"
    },
    {
        "bodyPart": "back",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/8G2oeftAWNlMUg",
        "id": "0095",
        "instructions": [
            "Stand with your feet shoulder-width apart and hold a barbell in front of you with an overhand grip.",
            "Keep your arms straight and your back straight throughout the exercise.",
            "Lift your shoulders up towards your ears as high as possible, squeezing your traps at the top.",
            "Hold for a moment, then slowly lower your shoulders back down to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell shrug",
        "secondaryMuscles": [
            "shoulders"
        ],
        "target": "traps"
    },
    {
        "bodyPart": "waist",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/mYZizArGbzaTv9",
        "id": "0096",
        "instructions": [
            "Stand with your feet shoulder-width apart and hold a barbell with both hands, palms facing down.",
            "Keep your back straight and core engaged throughout the exercise.",
            "Slowly bend your torso to the right side, lowering the barbell towards your right knee.",
            "Pause for a moment, then return to the starting position.",
            "Repeat the movement on the left side.",
            "Continue alternating sides for the desired number of repetitions."
        ],
        "name": "barbell side bent v. 2",
        "secondaryMuscles": [
            "obliques",
            "lower back"
        ],
        "target": "abs"
    },
    {
        "bodyPart": "upper legs",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/pk-aoHVi6DTMFN",
        "id": "0097",
        "instructions": [
            "Stand with your feet wider than shoulder-width apart, toes pointing slightly outwards.",
            "Hold a barbell across your upper back, resting it on your shoulders.",
            "Take a big step to the side with your right foot, keeping your left foot planted.",
            "Bend your right knee and lower your body down into a squat position, keeping your chest up and your back straight.",
            "Push through your right heel to return to the starting position.",
            "Repeat on the other side, stepping out with your left foot.",
            "Continue alternating sides for the desired number of repetitions."
        ],
        "name": "barbell side split squat v. 2",
        "secondaryMuscles": [
            "glutes",
            "hamstrings",
            "calves"
        ],
        "target": "quads"
    },
    {
        "bodyPart": "upper legs",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/arKkZwi4M7sf7d",
        "id": "0098",
        "instructions": [
            "Stand with your feet wider than shoulder-width apart, toes pointing slightly outward.",
            "Hold a barbell across your upper back, resting it on your traps.",
            "Engage your core and keep your chest up as you lower your body down into a squat position, bending at the knees and hips.",
            "As you lower, push your knees out to the sides and keep your weight on your heels.",
            "Lower until your thighs are parallel to the ground, then push through your heels to return to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell side split squat",
        "secondaryMuscles": [
            "glutes",
            "hamstrings",
            "calves"
        ],
        "target": "quads"
    },
    {
        "bodyPart": "upper legs",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/g1j8rC4bfxNqUi",
        "id": "0099",
        "instructions": [
            "Stand with your feet shoulder-width apart, holding a barbell across your upper back.",
            "Take a large step forward with one leg, keeping your torso upright.",
            "Lower your body by bending your front knee and hip, while keeping your back leg straight.",
            "Continue lowering until your front thigh is parallel to the ground.",
            "Pause for a moment, then push through your front heel to return to the starting position.",
            "Repeat for the desired number of repetitions, then switch legs."
        ],
        "name": "barbell single leg split squat",
        "secondaryMuscles": [
            "glutes",
            "hamstrings",
            "calves"
        ],
        "target": "quads"
    },
    {
        "bodyPart": "shoulders",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/SfBhmY6pDmdaFA",
        "id": "0100",
        "instructions": [
            "Stand with your feet shoulder-width apart and hold a barbell in front of your thighs with an overhand grip.",
            "Bend your knees slightly and hinge forward at the hips, keeping your back straight and chest up.",
            "Simultaneously lift the barbell up towards your shoulders while jumping slightly off the ground.",
            "As you reach the top of the movement, quickly reverse the motion and lower the barbell back down to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell skier",
        "secondaryMuscles": [
            "triceps",
            "core"
        ],
        "target": "delts"
    },
    {
        "bodyPart": "upper legs",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/waHxFK-NROjUGD",
        "id": "0101",
        "instructions": [
            "Stand with your feet shoulder-width apart, toes slightly turned out.",
            "Hold the barbell across your upper back, resting it on your traps or rear delts.",
            "Engage your core and keep your chest up as you lower your hips back and down, as if sitting into a chair.",
            "Lower until your thighs are parallel to the ground, or as low as you can comfortably go.",
            "Drive through your heels to stand back up, squeezing your glutes at the top.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell speed squat",
        "secondaryMuscles": [
            "quadriceps",
            "hamstrings",
            "calves"
        ],
        "target": "glutes"
    },
    {
        "bodyPart": "upper legs",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/RI98StgBhkollg",
        "id": "0102",
        "instructions": [
            "Start by kneeling on the ground with your knees hip-width apart and your toes pointing forward.",
            "Place a barbell across your shoulders, gripping it with an overhand grip and your hands slightly wider than shoulder-width apart.",
            "Engage your core and keep your chest lifted as you slowly lower your body down by bending your knees, keeping your back straight.",
            "Continue lowering until your thighs are parallel to the ground, or as low as you can comfortably go.",
            "Pause for a moment at the bottom, then push through your heels to return to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell squat (on knees)",
        "secondaryMuscles": [
            "glutes",
            "hamstrings",
            "calves"
        ],
        "target": "quads"
    },
    {
        "bodyPart": "waist",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/73uGVFAI5zbbAv",
        "id": "0103",
        "instructions": [
            "Stand upright with your feet shoulder-width apart and hold the barbell with both hands in front of your thighs.",
            "Engage your core and slowly roll the barbell down towards the ground, keeping your back straight and your arms extended.",
            "Continue rolling the barbell forward until your body is fully extended and your hands are directly above your head.",
            "Pause for a moment, then slowly roll the barbell back towards your thighs, maintaining control and keeping your core engaged.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell standing ab rollerout",
        "secondaryMuscles": [
            "shoulders",
            "lower back"
        ],
        "target": "abs"
    },
    {
        "bodyPart": "lower arms",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/R4aMykgr761d40",
        "id": "0104",
        "instructions": [
            "Stand up straight with your feet shoulder-width apart and hold a barbell with an overhand grip.",
            "Rest the barbell on the back of your hands with your palms facing down and your fingers pointing towards your body.",
            "Keeping your upper arms stationary, exhale and curl your wrists upwards as far as possible.",
            "Hold the contracted position for a brief pause, then inhale and slowly lower the barbell back to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell standing back wrist curl",
        "secondaryMuscles": [
            "biceps",
            "shoulders"
        ],
        "target": "forearms"
    },
    {
        "bodyPart": "shoulders",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/fISzJVioOiJ61J",
        "id": "0105",
        "instructions": [
            "Stand with your feet shoulder-width apart and hold the barbell in front of your shoulders with an overhand grip.",
            "Press the barbell overhead, fully extending your arms.",
            "Lower the barbell back down to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell standing bradford press",
        "secondaryMuscles": [
            "triceps",
            "upper back"
        ],
        "target": "delts"
    },
    {
        "bodyPart": "upper arms",
        "equipment": "barbell",
        "gifUrl": "https://v2.exercisedb.io/image/FO0ova3hEOG-eW",
        "id": "0106",
        "instructions": [
            "Stand up straight with your feet shoulder-width apart and hold a barbell with an underhand grip, hands close together.",
            "Keep your elbows close to your torso and your upper arms stationary throughout the movement.",
            "Exhale as you curl the weights while contracting your biceps. Continue to raise the bar until your biceps are fully contracted and the bar is at shoulder level.",
            "Hold the contracted position for a brief pause as you squeeze your biceps.",
            "Inhale as you slowly begin to bring the barbell back to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        "name": "barbell standing close grip curl",
        "secondaryMuscles": [
            "forearms"
        ],
        "target": "biceps"
    }
]

export default DEFAULT_EXERCISE_LIST;