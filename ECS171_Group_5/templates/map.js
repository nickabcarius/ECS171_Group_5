window.onload = function() {
  var R = Raphael("map", 950, 600),
    attr = {
      fill: "#d3d3d3",
      stroke: "#fff",
      "stroke-opacity": "1",
      "stroke-linejoin": "round",
      "stroke-miterlimit": "4",
      "stroke-width": "0.75",
      "stroke-dasharray": "none"
    },
    usRaphael = {},
    state_id = [];


  //Draw Map and store Raphael paths
  var i = 0;
  for (var state in usMap) {
    usRaphael[state] = R.path(usMap[state]).attr(attr);
    state_id[i] = state;
    i++;
  }


  //Do Work on Map
  for (var state in usRaphael) {
    usRaphael[state].color = Raphael.getColor();

    (function(st, state) {
      st[0].style.cursor = "pointer";

      st[0].onclick = function(){

        for (state in usRaphael) {
          usRaphael[state].animate({ fill: '#d3d3d3' }, 500);
        }
        var currentColor = this.getAttribute('fill');
        var targetColor = (currentColor === st.color) ? '#d3d3d3' : st.color;
        if (currentColor == st.color) {
          st.animate({ fill: '#d3d3d3' }, 500);
          document.getElementById("whichState").innerHTML = "______";
        } else {
          st.animate({ fill: st.color }, 500);
          document.getElementById("whichState").innerHTML = getStateName(state_id[st.id]);
          var state = document.getElementById("myState");
          state.value = document.getElementById("whichState").innerHTML;
        }
      }
    })(usRaphael[state], state);
  }
};




// Get state name
function getStateName(abbr) {
  switch (abbr.toUpperCase()) {
    case "AL":
      abbr = "Alabama";
      break;
    case "AK":
      abbr = "Alaska";
      break;
    case "AZ":
      abbr = "Arizona";
      break;
    case "AR":
      abbr = "Arkansas";
      break;
    case "CA":
      abbr = "California";
      break;
    case "CO":
      abbr = "Colorado";
      break;
    case "CT":
      abbr = "Connecticut";
      break;
    case "DE":
      abbr = "Delaware";
      break;
    case "DC":
      abbr = "District of Columbia";
      break;
    case "FL":
      abbr = "Florida";
      break;
    case "GA":
      abbr = "Georgia";
      break;
    case "HI":
      abbr = "Hawaii";
      break;
    case "ID":
      abbr = "Idaho";
      break;
    case "IL":
      abbr = "Illinois";
      break;
    case "IN":
      abbr = "Indiana";
      break;
    case "IA":
      abbr = "Iowa";
      break;
    case "KS":
      abbr = "Kansas";
      break;
    case "KY":
      abbr = "Kentucky";
      break;
    case "LA":
      abbr = "Louisiana";
      break;
    case "ME":
      abbr = "Maine";
      break;
    case "MD":
      abbr = "Maryland";
      break;
    case "MA":
      abbr = "Massachusetts";
      break;
    case "MI":
      abbr = "Michigan";
      break;
    case "MN":
      abbr = "Minnesota";
      break;
    case "MS":
      abbr = "Mississippi";
      break;
    case "MO":
      abbr = "Missouri";
      break;
    case "MT":
      abbr = "Montana";
      break;
    case "NE":
      abbr = "Nebraska";
      break;
    case "NV":
      abbr = "Nevada";
      break;
    case "NH":
      abbr = "New Hampshire";
      break;
    case "NJ":
      abbr = "New Jersey";
      break;
    case "NM":
      abbr = "New Mexico";
      break;
    case "NY":
      abbr = "New York";
      break;
    case "NC":
      abbr = "North Carolina";
      break;
    case "ND":
      abbr = "North Dakota";
      break;
    case "OH":
      abbr = "Ohio";
      break;
    case "OK":
      abbr = "Oklahoma";
      break;
    case "OR":
      abbr = "Oregon";
      break;
    case "PA":
      abbr = "Pennsylvania";
      break;
    case "RI":
      abbr = "Rhode Island";
      break;
    case "SC":
      abbr = "South Carolina";
      break;
    case "SD":
      abbr = "South Dakota";
      break;
    case "TN":
      abbr = "Tennessee";
      break;
    case "TX":
      abbr = "Texas";
      break;
    case "UT":
      abbr = "Utah";
      break;
    case "VT":
      abbr = "Vermont";
      break;
    case "VA":
      abbr = "Virginia";
      break;
    case "WA":
      abbr = "Washington";
      break;
    case "WV":
      abbr = "West Virginia";
      break;
    case "WI":
      abbr = "Wisconsin";
      break;
    case "WY":
      abbr = "Wyoming";
      break;
  }
  return abbr;
}
