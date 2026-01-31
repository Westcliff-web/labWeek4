var openCaptionTag = '<span class="caption">';
var closeCaptionTag = '</span>';
var openDescTag = '<span class="description">';
var closeDescTag = '</span>';
var closeInfoBoxText = 'Click This To Close';

var imageUrls = [
    "images/dog.jpg",
    "images/dog2.jpg",
    "images/dog3.jpg",
    "images/dog4.jpg",
    "images/dog5.jpg",
    "images/cat.jpg",
    "images/cat2.jpg",
    "images/cat3.jpg",
    "images/cat4.jpg",
    "images/cat5.jpg"
];

var captionTexts = [
    "GOLDEN FRIEND",
    "PLAYFUL RETRIEVER",
    "HAPPY COMPANION",
    "LOYAL PUP",
    "FAITHFUL DOG",
    "TABBY CUDDLE",
    "CURIOUS CAT",
    "COZY FELINE",
    "SUNNY TABBY",
    "SWEET KITTY"
];

var descTexts = [
    "A friendly Golden Retriever mix looking for a loving home. Great with children.",
    "Energetic dog who enjoys fetch and long walks in the park.",
    "Loyal and affectionate dog ready to join your family.",
    "Young pup full of love, fully vaccinated and ready to adopt.",
    "A devoted companion who will greet you at the door every day.",
    "An adorable tabby cat who loves cuddles and quiet afternoons.",
    "A playful cat with soft fur and a gentle personality.",
    "This cat enjoys napping in sunny spots and gentle petting.",
    "Curious and friendly, this tabby loves exploring and playing.",
    "Sweet-natured cat looking for a calm forever home."
];

var infoTexts = [
    "A friendly Golden Retriever mix looking for a loving home. Great with children and other pets. This dog has been fully vaccinated, spayed, and is ready for adoption. He loves outdoor play and would thrive in an active family.",
    "Energetic dog who enjoys fetch and long walks in the park. Perfect companion for runners and hikers. This pup has completed basic obedience training and is eager to learn more. Ideal for families with a yard.",
    "Loyal and affectionate dog ready to join your family. This sweet soul was rescued from a shelter and has shown nothing but love. He gets along well with other dogs and would make a wonderful addition to any home.",
    "Young pup full of love, fully vaccinated and ready to adopt. His playful personality will brighten your days. This dog is house-trained and knows basic commands. Looking for a forever home with patience and love.",
    "A devoted companion who will greet you at the door every day. This senior dog has a calm demeanor and enjoys quiet evenings. Perfect for someone looking for a relaxed, loving pet. Adoption fee waived for seniors.",
    "An adorable tabby cat who loves cuddles and quiet afternoons. This cat has been with us for a few months and is ready to find her forever home. She is indoor-only and gets along with calm dogs.",
    "A playful cat with soft fur and a gentle personality. Loves toys and climbing. This feline is fully litter-trained and has been spayed. Would do well in a home with or without other pets.",
    "This cat enjoys napping in sunny spots and gentle petting. A low-maintenance companion perfect for apartment living. She has been health-checked and is ready for adoption. Come meet her today!",
    "Curious and friendly, this tabby loves exploring and playing. Great with children and adapts quickly to new environments. Fully vaccinated and microchipped. Ready to bring joy to your home.",
    "Sweet-natured cat looking for a calm forever home. This gentle soul prefers a quiet household. She has been with us for a while and deserves a loving family. Adoption includes starter kit."
];

var i;
var listId;
var listEl;
var imgTag;
var captionPart;
var descPart;

for (i = 0; i < 10; i++) {
    listId = "photo" + (i + 1);
    listEl = document.getElementById(listId);
    imgTag = '<img src="' + imageUrls[i] + '" alt="' + captionTexts[i] + '" width="400" height="300">';
    captionPart = openCaptionTag + captionTexts[i] + closeCaptionTag;
    descPart = '<span class="description" data-index="' + i + '">' + descTexts[i] + '</span>';
    listEl.innerHTML = imgTag + captionPart + descPart;
}

document.getElementById("infobox-close").innerHTML = closeInfoBoxText;

var infobox = document.getElementById("infobox");
var infoboxHeading = document.getElementById("infobox-heading");
var infoboxText = document.getElementById("infobox-text");

var descElements = document.querySelectorAll(".description");
for (i = 0; i < descElements.length; i++) {
    descElements[i].addEventListener("click", function() {
        var idx = parseInt(this.getAttribute("data-index"), 10);
        infoboxHeading.innerHTML = captionTexts[idx];
        infoboxText.innerHTML = infoTexts[idx];
        infobox.style.visibility = "visible";
    });
}

document.getElementById("infobox-close").addEventListener("click", function(e) {
    e.preventDefault();
    infobox.style.visibility = "hidden";
});
