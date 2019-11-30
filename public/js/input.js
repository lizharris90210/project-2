console.log("/js/input.js loaded\nDon't know what this file does.\n");
$(".create-form").on("NewArtistSubmit", function(event) {
  event.preventDefault();
  var newArtist = {
    artist_name: $("#artistNameInput")
      .val()
      .trim(),
    location_city: $("#artistLocCityInput")
      .val()
      .trim(),
    location_state: $("#artistLocStateInput")
      .val()
      .trim(),
    contact_email: $("#artistConEmailInput")
      .val()
      .trim(),
    contact_insta: $("#artistConInstaInput")
      .val()
      .trim(),
    contact_twitter: $("#artistConTwitterInput")
      .val()
      .trim(),
    current_band: $("#artistCurrBandInput")
      .val()
      .trim(),
    instruments: $("#artistInstrumentsInput")
      .val()
      .trim(),
    past_bands: $("#artistPastBandsInput")
      .val()
      .trim(),
    genres: $("#artistGenresInput")
      .val()
      .trim()
  };
  $.ajax("/api/cue", {
    type: "POST",
    data: newArtist
  }).then(function() {
    location.reload();
  });
});

$(".create-form").on("NewBandSubmit", function(event) {
  event.preventDefault();
  var newBand = {
    band_name: $("#bandNameInput")
      .val()
      .trim(),
    location_city: $("#bandLocCityInput")
      .val()
      .trim(),
    location_state: $("#bandLocStateInput")
      .val()
      .trim(),
    contact_email: $("#bandConEmailInput")
      .val()
      .trim(),
    contact_insta: $("#bandConInstaInput")
      .val()
      .trim(),
    contact_twitter: $("#bandConTwitterInput")
      .val()
      .trim(),
    genres: $("#bandConGenresInput")
      .val()
      .trim()
  };
  $.ajax("/api/cue", {
    type: "POST",
    data: newBand
  }).then(function() {
    location.reload();
  });
});

$(".create-form").on("NewBackstageSubmit", function(event) {
  event.preventDefault();
  var newBackstage = {
    backstage_name: $("#backstageNameInput")
      .val()
      .trim(),
    location_city: $("#backstageLocCityInput")
      .val()
      .trim(),
    location_state: $("#backstageLocStateInput")
      .val()
      .trim(),
    contact_email: $("#backstageConEmailInput")
      .val()
      .trim(),
    contact_insta: $("#backstageConInstaInput")
      .val()
      .trim(),
    contact_twitter: $("#backstageConTwitterInput")
      .val()
      .trim(),
    equipment: $("#backstageEquipmentInput")
      .val()
      .trim(),
    experience: $("#backstageExperienceInput")
      .val()
      .trim(),
    genres: $("#backstageGenresInput")
      .val()
      .trim()
  };
  $.ajax("/api/cue", {
    type: "POST",
    data: newBackstage
  }).then(function() {
    location.reload();
  });
});

$(".create-form").on("NewVenueSubmit", function(event) {
  event.preventDefault();
  var newVenue = {
    venue_name: $("#venueNameInput")
      .val()
      .trim(),
    location_city: $("#venueLocCityInput")
      .val()
      .trim(),
    location_state: $("#venueLocStateInput")
      .val()
      .trim(),
    contact_email: $("#venueConEmailInput")
      .val()
      .trim(),
    contact_insta: $("#venueConInstaInput")
      .val()
      .trim(),
    contact_twitter: $("#venueConTwitterInput")
      .val()
      .trim(),
    genres: $("#venueGenresInput")
      .val()
      .trim()
  };
  $.ajax("/api/cue", {
    type: "POST",
    data: newVenue
  }).then(function() {
    location.reload();
  });
});
