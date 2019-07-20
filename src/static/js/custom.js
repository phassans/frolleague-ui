$(document).ready(function() {
  $(".login-button").click(function(e) {
    e.preventDefault();
  });
  $(".add-work").click(function(e) {
    e.preventDefault();
    console.log("done");
    $(".work-daba").append(
      '<div class="white-box mb-35 mt-30 work-box"> <div class="white-box-remove"><i class="fas fa-times"></i></div><div class="form-group form-group-inline mb-30"><label>Company</label><input type="text" data-name="company information"></div> <div class="form-group form-group-inline"><label>Location</label><input type="text" data-name="location"></div> <h5 class="sub-heading text-center mt-5px form-sub">Please enter location</h5> </div>'
    );
  });
  $(".add-education").click(function(e) {
    e.preventDefault();
    $(".education-container").prepend(
      '<div class="white-box mb-35 mt-30  eduction-box">  <div class="white-box-remove"><i class="fas fa-times"></i></div><div class="form-group form-group-inline mb-30 form-group-inline-change"><label>School</label><input type="text" data-name="school"></div> <div class="form-group form-group-inline mb-30 form-group-inline-change"><label>Degree</label><select class="" style="margin-left:15px;width:74%;position: relative;top: 5px; " title=" " id="test" data-name="degree"> <option>Example</option> <option>Example</option> <option>Example</option> </select> </div> <div class="form-group form-group-inline form-group-inline-change"><label>Stream</label><input type="text" data-name="stream"></div> <h5 class="sub-heading text-center mt-5px mb-30 form-sub-change">As per your degree certificate.</h5> <div class="form-group form-group-inline form-group-inline-change"><label>Year</label><select class="" title=" " data-name="year"> <option>Example</option> <option>Example</option> <option>Example</option> </select></div>' +
        "</div>" +
        '<div class="form-group mt-30 form-group-inline form-group-inline-change"><label>To year</label><select style="min-height: 40px;margin-left:15px;width:72%;position: relative;top: 5px; " class="" title=" " data-name="toyear" tabindex="-98"><option>Example</option><option>Example</option><option>Example</option>' +
        "</select></div>"
    );
    //$("select").selectpicker();
  });

  //constant userid
  var userid = "fhVq011uDC";
  var token = CSRF_TOKEN;

  $(".continue-button").click(function(e) {
    e.preventDefault();
    $(".error-box")
      .hide()
      .empty();
    if ($(this).attr("data-step") == 1) {
      slideActive(2);
    } else if ($(this).attr("data-step") == 2) {
      $("#url").removeClass("error");
      var linkedin_url = $("#url").val();
      var valid = /^(ftp|http|https):\/\/[^ "]+$/.test(linkedin_url);
      if ($("#url").val() == "") {
        $("#url").addClass("error");
        $(".error-box")
          .empty()
          .fadeIn()
          .append("<li>Please enter url.</li>");
      } else if (!valid) {
        $("#url").addClass("error");
        $(".error-box")
          .empty()
          .fadeIn()
          .append("<li>Please enter a valid url.</li>");
      } else {
        //send request to server here
        linkedin_url = encodeURIComponent(linkedin_url);
        var url = "/ajax/step2/";
        console.log("inserted url...");

        $.ajax({
          headers: { "X-CSRFToken": token },
          type: "post",
          url: url,
          data: {
            userid: userid,
            url: linkedin_url
          },
          dataType: "json",
          success: function(data) {
            console.log(data);
          },
          error: function(error) {
            console.log(error);
          }
        });
        // show this slide if no errors
        slideActive(3);
      }
    } else if ($(this).attr("data-step") == 3) {
      if (!$(this).hasClass("disabled")) {
        // fetch work info when page loads
        //send request to server here
        var url = "/ajax/step4a/";
        console.log("fetching work info...");
        $.ajax({
          headers: { "X-CSRFToken": token },
          type: "post",
          url: url,
          data: {
            userid: userid
          },
          dataType: "json",
          success: function(data) {
            console.log(data);
            data = JSON.parse(data);
            //console.log(data.companies);
            var i;
            if (data.companies.length > 0) {
              $(".work-stp").html("");
            }
            for (i = 0; i < data.companies.length; ++i) {
              //console.log(data.companies[i].CompanyName);
              $(".work-stp").append(
                '<div class="work-container"><div class="white-box mb-35 mt-30 mb-30 work-box"><div class="white-box-remove"><i class="fas fa-times"></i></div><div class="form-group form-group-inline mb-30"><label>Company</label><input type="text" data-name="company information" value="' +
                  data.companies[i].CompanyName +
                  '" ></div><div class="form-group form-group-inline"><label>Location</label><input type="text" data-name="location" value="' +
                  data.companies[i].Location +
                  '"></div><h5 class="sub-heading text-center mt-5px form-sub">Please enter location</h5></div></div>'
              );
            }
          },
          error: function(error) {
            console.log(error);
          }
        });
        slideActive(4);
      }
    } else if ($(this).attr("data-step") == 4) {
      var val = true;
      $(".work-box .error").removeClass("error");
      $(".work-box input").each(function() {
        if ($(this).val() == "") {
          val = false;
          $(this).addClass("error");
          var a =
            $(this)
              .parents(".work-box")
              .index() + 1;
          var b = $(this).attr("data-name");
          $(".error-box")
            .fadeIn()
            .append("<li>Please enter " + b + " in section " + a + ".</li>");
        }
      });
      if (val == true) {
        //send request to server here
        var url = "/ajax/step4b/";
        console.log("updating...");
        var company = $("input[data-name='company information']")
          .map(function() {
            return $(this).val();
          })
          .get();
        console.log(company);
        var locations = $("input[data-name='location']")
          .map(function() {
            return $(this).val();
          })
          .get();
        console.log(locations);
        //var obj = {};

        var result = [];
        company.forEach((key, i) =>
          result.push({ companyName: company[i], location: locations[i] })
        );
        console.log(result);
        //result = { ...result };
        // Object.assign({}, result);
        // console.log(result);
        $.ajax({
          headers: { "X-CSRFToken": token },
          type: "post",
          url: url,
          data: {
            userid: userid,
            companies: JSON.stringify(result)
          },
          dataType: "json",
          success: function(data) {
            console.log(data);
          },
          error: function(error) {
            console.log(error);
          }
        });
        // fetch slide 5 data verify education
        var url = "/ajax/step5a/";
        console.log("fetching education...");
        $.ajax({
          headers: { "X-CSRFToken": token },
          type: "post",
          url: url,
          data: {
            userid: userid
          },
          dataType: "json",
          success: function(data) {
            console.log(data);
            data = JSON.parse(data);
            //console.log(data.companies);
            if (data.schools.length > 0) {
              //$(".add-work").html("");
              $(".education-container").html("");
            }
            var i;
            for (i = 0; i < data.schools.length; ++i) {
              //console.log(data.companies[i].CompanyName);
              $(".education-container").append(
                '<div class="white-box mb-35 mt-30 mb-30 eduction-box">' +
                  '<div class="white-box-remove"><i class="fas fa-times"></i></div>' +
                  '<div class="form-group form-group-inline mb-30 form-group-inline-change"><label>School</label><input type="text" data-name="school" value="' +
                  data.schools[i].SchoolName +
                  '"></div>' +
                  '<div class="form-group form-group-inline mb-30 form-group-inline-change"><label>Degree</label><select style="min-height: 40px;margin-left:15px;width:72%;position: relative;top: 5px; " class="form-control" title=" " id="test" data-name="degree" tabindex="-98">' +
                  "<option>" +
                  data.schools[i].Degree +
                  '</option>" ' +
                  "<option>Example</option>" +
                  "<option>Example</option>" +
                  "<option>Example</option>" +
                  "</select>" +
                  "</div>" +
                  '<div class="form-group form-group-inline form-group-inline-change"><label>Stream</label><input type="text" data-name="stream" value="' +
                  data.schools[i].FieldOfStudy +
                  '"></div>' +
                  '<h5 class="sub-heading text-center mt-5px mb-30 form-sub-change">As per your degree certificate.</h5>' +
                  '<div class="form-group form-group-inline form-group-inline-change"><label>From year</label><select style="min-height: 40px;margin-left:15px;width:72%;position: relative;top: 5px; " class="" title=" " data-name="year" tabindex="-98"><option class="bs-title-option" value="' +
                  data.schools[i].FromYear +
                  '">' +
                  data.schools[i].FromYear +
                  "</option>" +
                  "<option>Example</option>" +
                  "<option>Example</option>" +
                  "<option>Example</option>" +
                  "</select></div>" +
                  '<div class="form-group mt-30 form-group-inline form-group-inline-change"><label>To year</label><select style="min-height: 40px;margin-left:15px;width:72%;position: relative;top: 5px; " class="" title=" " data-name="toyear" tabindex="-98"><option class="bs-title-option" value="' +
                  data.schools[i].ToYear +
                  '">' +
                  data.schools[i].ToYear +
                  "</option>" +
                  "<option>Example</option>" +
                  "<option>Example</option>" +
                  "<option>Example</option>" +
                  "</select></div>" +
                  "</div>"
              );

              //$("select").selectpicker();
              // $('select[data-name="degree"]').val(1);
              // $(".selectpicker").selectpicker("refresh");
              // $(".selectpicker").selectpicker("val", [1]);
            }
          },
          error: function(error) {
            console.log(error);
          }
        });
        slideActive(5);
      }
    } else if ($(this).attr("data-step") == 5) {
      var val = true;
      $(".eduction-box .error").removeClass("error");
      $(".eduction-box input").each(function() {
        if ($(this).val() == "") {
          val = false;
          $(this).addClass("error");
          var a =
            $(this)
              .parents(".eduction-box")
              .index() + 1;
          var b = $(this).attr("data-name");
          $(".error-box")
            .fadeIn()
            .append("<li>Please enter " + b + " in section " + a + ".</li>");
        }
      });
      $(".eduction-box select").each(function() {
        if (
          $(this)
            .children("option:selected")
            .val() == ""
        ) {
          val = false;
          $(this)
            .parents(".bootstrap-select")
            .find("button")
            .addClass("error");
          var a =
            $(this)
              .parents(".eduction-box")
              .index() + 1;
          var b = $(this).attr("data-name");
          $(".error-box")
            .fadeIn()
            .append("<li>Please select " + b + " in section " + a + ".</li>");
        }
      });
      if (val == true) {
        // update slide 5 data verify education
        //get all school names
        var schools = $("input[data-name='school']")
          .map(function() {
            return $(this).val();
          })
          .get();
        console.log(schools);
        //getting all field of study
        var stream = $("input[data-name='stream']")
          .map(function() {
            return $(this).val();
          })
          .get();
        console.log(stream);
        //get all degree
        var degree = $("select[data-name='degree']")
          .map(function() {
            return $(this).val();
          })
          .get();
        console.log(degree);

        var fromyear = $("select[data-name='year']")
          .map(function() {
            return parseInt($(this).val());
          })
          .get();
        console.log(fromyear);

        var toyear = $("select[data-name='toyear']")
          .map(function() {
            return parseInt($(this).val());
          })
          .get();
        console.log(toyear);

        var result = [];
        schools.forEach((key, i) =>
          result.push({
            schoolName: schools[i],
            degree: degree[i],
            fieldOfStudy: stream[i],
            FromYear: fromyear[i],
            ToYear: toyear[i]
          })
        );
        console.log(result);

        var url = "/ajax/step5b/";
        console.log("updating education...");
        $.ajax({
          headers: { "X-CSRFToken": token },
          type: "post",
          url: url,
          data: {
            userid: userid,
            schools: JSON.stringify(result)
          },
          dataType: "json",
          success: function(data) {
            console.log(data);
          },
          error: function(error) {
            console.log(error);
          }
        });

        // fetch User Groups (fetch user groups, when page loads)
        var url = "/ajax/step6a/";
        console.log("fetching user groups...");
        $.ajax({
          headers: { "X-CSRFToken": token },
          type: "post",
          url: url,
          data: {
            userid: userid
          },
          dataType: "json",
          success: function(data) {
            console.log(data);
            data = JSON.parse(data);
            //console.log(data.companies);
            if (data.groups.companyGroups.length > 0) {
              $(".cha-list").html("");
            }
            var i;
            for (i = 0; i < data.groups.companyGroups.length; ++i) {
              //console.log(data.companies[i].CompanyName);
              var checked = "checked";
              console.log(data.groups.companyGroups[i].status);
              if (data.groups.companyGroups[i].status == "true") {
                checked = "checked";
              } else {
                checked = "";
              }
              $(".cha-list").append(
                '<li><div class="chanel-list-left">' +
                  data.groups.companyGroups[i].group +
                  '</div><div class="chanel-list-right"><div class="custom-checkbox"><input type="checkbox" class="chanel-checkbox" data-group="' +
                  data.groups.companyGroups[i].group +
                  '" checked="' +
                  checked +
                  '"' +
                  'id="chk0' +
                  i +
                  '"><label for="chk0' +
                  i +
                  '"></label></div></div></li>'
              );
            }
            if (data.groups.schoolGroups.length > 0) {
              $(".cha-list-school").html("");
            }
            var i;
            for (i = 0; i < data.groups.schoolGroups.length; ++i) {
              //console.log(data.companies[i].CompanyName);
              var checked = "checked";
              console.log(data.groups.schoolGroups[i].status);
              if (data.groups.schoolGroups[i].status == "true") {
                checked = "checked";
              } else {
                checked = "";
              }
              $(".cha-list-school").append(
                '<li><div class="chanel-list-left">' +
                  data.groups.schoolGroups[i].group +
                  '</div><div class="chanel-list-right"><div class="custom-checkbox"><input type="checkbox" data-group="' +
                  data.groups.schoolGroups[i].group +
                  '" class="chanel-checkbox" checked="' +
                  checked +
                  '" id="chk3' +
                  i +
                  '"><label for="chk3' +
                  i +
                  '"></label></div></div></li>'
              );
            }
          },
          error: function(error) {
            console.log(error);
          }
        });
        slideActive(6);
      }
    }
  });
  $(document).on("change", ".chanel-checkbox", function(event) {
    console.log("checkbox status changed");
    var status = false;
    var group = $(this).attr("data-group");
    console.log(group);
    if (this.checked) {
      console.log("true");
      status = true;
    } else {
      console.log("false");
      status = false;
    }
    var url = "/ajax/step6b/";
    console.log("updating user groups...");
    $.ajax({
      headers: { "X-CSRFToken": token },
      type: "post",
      url: url,
      data: {
        userid: userid,
        group: group,
        status: status
      },
      dataType: "json",
      success: function(data) {
        console.log(data);
      },
      error: function(error) {
        console.log(error);
      }
    });
  });
  $(".steps-list li.click").click(function(e) {
    e.preventDefault();
    $(".error").removeClass("error");
    if ($(this).hasClass("visited")) {
      $(".error-box")
        .hide()
        .empty();
      var cur = $(".steps-one.active").attr("data-step");
      var next = $(this).attr("data-step");
      pagecheck(cur, next);
    }
  });
  $(".back-button").click(function(e) {
    e.preventDefault();
    $(".error").removeClass("error");
    $(".error-box")
      .hide()
      .empty();
    var cur = $(".steps-one.active").attr("data-step");
    var next = $(this).attr("data-step") - 1;
    pagecheck(cur, next);
  });
  function pagecheck(cur, next) {
    if (cur == 1) {
      slideActive(next);
    } else if (cur == 2) {
      $("#url").removeClass("error");
      if ($("#url").val() == "") {
        $("#url").addClass("error");
        $(".error-box")
          .empty()
          .fadeIn()
          .append("<li>Please enter url.</li>");
      } else {
        slideActive(next);
      }
    } else if (cur == 3) {
      slideActive(4);
    } else if (cur == 4) {
      var val = true;
      $(".work-box .error").removeClass("error");
      $(".work-box input").each(function() {
        if ($(this).val() == "") {
          val = false;
          $(this).addClass("error");
          var a =
            $(this)
              .parents(".work-box")
              .index() + 1;
          var b = $(this).attr("data-name");
          $(".error-box")
            .fadeIn()
            .append("<li>Please enter " + b + " in section " + a + ".</li>");
        }
      });
      if (val == true) {
        slideActive(next);
      }
    } else if (cur == 5) {
      var val = true;
      $(".eduction-box .error").removeClass("error");
      $(".eduction-box input").each(function() {
        if ($(this).val() == "") {
          val = false;
          $(this).addClass("error");
          var a =
            $(this)
              .parents(".eduction-box")
              .index() + 1;
          var b = $(this).attr("data-name");
          $(".error-box")
            .fadeIn()
            .append("<li>Please enter " + b + " in section " + a + ".</li>");
        }
      });
      $(".eduction-box select").each(function() {
        if (
          $(this)
            .children("option:selected")
            .val() == ""
        ) {
          val = false;
          $(this)
            .parents(".bootstrap-select")
            .find("button")
            .addClass("error");
          var a =
            $(this)
              .parents(".eduction-box")
              .index() + 1;
          var b = $(this).attr("data-name");
          $(".error-box")
            .fadeIn()
            .append("<li>Please select " + b + " in section " + a + ".</li>");
        }
      });
      if (val == true) {
        slideActive(next);
      }
    } else if (cur == 6) {
      slideActive(next);
    }
  }
  function slideActive(e) {
    $(".steps-one:visible").fadeOut(function() {
      $(".steps-one[data-step=" + e + "]")
        .css("display", "flex")
        .hide()
        .fadeIn(function() {
          if ($(".steps-one:visible").attr("data-step") == 3) {
            $(".process-bar-inner").animate(
              {
                width: "100%"
              },
              3000,
              function() {
                $(".continue-button[data-step=3]").removeClass("disabled");
              }
            );
          }
        });
      if (e == 6) {
        $(".steps-one[data-step=" + e + "]").addClass("finish");
      }
      for (var i = 1; i < e; i++) {
        $(".steps-list li:nth-of-type(" + i + ")").addClass("finish");
      }
      $(".steps-one.active").removeClass("active");
      $(".steps-list li.active").removeClass("active");
      $(".steps-one[data-step=" + e + "]").addClass("active");
      $(".steps-list li:nth-of-type(" + e + ")").addClass("active");
      $(".steps-list li:nth-of-type(" + e + ")").addClass("visited");
    });
  }
  $(".skip-button").click(function(e) {
    e.preventDefault();
    $(".steps-list li:nth-of-type(3)").addClass("visited");
    $(".error-box")
      .hide()
      .empty();
    var url = "/ajax/step4a/";
    console.log("fetching work info...");
    $.ajax({
      headers: { "X-CSRFToken": token },
      type: "post",
      url: url,
      data: {
        userid: userid
      },
      dataType: "json",
      success: function(data) {
        console.log(data);
        data = JSON.parse(data);
        //console.log(data.companies);
        var i;
        if (data.companies.length > 0) {
          $(".work-stp").html("");
        }
        for (i = 0; i < data.companies.length; ++i) {
          //console.log(data.companies[i].CompanyName);
          $(".work-stp").before(
            '<div class="work-container"><div class="white-box mb-35 mt-30 mb-30 work-box"><div class="white-box-remove"><i class="fas fa-times"></i></div><div class="form-group form-group-inline mb-30"><label>Company</label><input type="text" data-name="company information" value="' +
              data.companies[i].CompanyName +
              '" ></div><div class="form-group form-group-inline"><label>Location</label><input type="text" data-name="location" value="' +
              data.companies[i].Location +
              '"></div><h5 class="sub-heading text-center mt-5px form-sub">Please enter location</h5></div></div>'
          );
        }
      },
      error: function(error) {
        console.log(error);
      }
    });
    slideActive(4);
  });
  $("#linkedin-form").submit(function(event) {
    // update User Groups ()
    // var url = "/ajax/step6b/";
    // console.log("updating user groups...");
    // $.ajax({
    //   url: url,
    //   dataType: "json",
    //   success: function(data) {
    //     console.log(data);
    //   },
    //   error: function(error) {
    //     console.log(error);
    //   }
    // });
    alert("Form Submitted");
    event.preventDefault();
  });
  $(document).on("click", ".white-box-remove", function() {
    $(this)
      .parents(".white-box")
      .remove();
  });
});
