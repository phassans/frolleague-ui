$(document).ready(function()
{
  $(".login-button").click(function(e)
  {
    e.preventDefault();
  });

  // ADD WORK
  $("#add-work").click(function(e)
  {
    e.preventDefault();
    $(".work-container").prepend('<div class="des-form work-box white-boxs"><div class="form-close white-box-remove"><i class="fas fa-times"></i></div><div class="fom"><div class="form-group" style="margin-bottom: 0px"><label style="font-size: 12px;margin-bottom: 0px;">COMPANY</label><div class=""><input type="text" data-name="company information" class="form-control" id="email" placeholder="Write here..."></div></div><div class="form-group" style="margin-bottom: 0px"><label style="font-size: 12px;margin-bottom: 0px;">LOCATION</label><div class=""><input type="text" data-name="location" class="form-control" id="email" placeholder="Write here..."></div></div></div></div>');
  });

  // add education
  $("#add-education").click(function(e)
  {
    e.preventDefault();
    $(".education-container").prepend('<div class="des-form work-box eduction-box white-boxs" style="padding-bottom: 50px;"><div class="form-close white-box-remove"><i class="fas fa-times"></i></div><div class="fom"><div class="form-group" style="margin-bottom: 0px"><label style="font-size: 12px;margin-bottom: 0px;">SCHOOL</label><div class=""><input type="text" data-name="school"  class="form-control" id="email" placeholder="Write here..."></div></div><div class="form-group" style="margin-bottom: 0px"><label style="font-size: 12px;margin-top: 10px;font-weight: 600;text-transform: uppercase;width: 100%;">DEGREE</label><select class="form-control" title=" " id="test" data-name="degree"><option>Select Degree</option><option>Undergraduate</option><option>Bachelors</option><option>Masters</option></select></div><div class="form-group" style="margin-bottom: 0px"><label style="font-size: 12px;margin-top: 10px;font-weight: 600;text-transform: uppercase;width: 100%;margin-bottom: 0px;">STREAM</label><div class=""><input type="text" data-name="stream" id="email" placeholder="Write here..."></div></div><div class="form-group" style="margin-bottom: 0px;"><label style="font-size: 12px;margin-top: 10px;font-weight: 600;text-transform: uppercase;width: 100%;">FROM YEAR</label><select class="" title="" data-name="year" id="test"><option value="Select Year">Select Year</option><option value="2019">2019</option> <option value="2018">2018</option> <option value="2017">2017</option> <option value="2016">2016</option> <option value="2015">2015</option> <option value="2014">2014</option> <option value="2013">2013</option> <option value="2012">2012</option> <option value="2011">2011</option><option value="2010">2010</option> <option value="2009">2009</option> <option value="2008">2008</option> <option value="2007">2007</option> <option value="2006">2006</option> <option value="2005">2005</option> <option value="2004">2004</option> <option value="2003">2003</option> <option value="2002">2002</option> <option value="2001">2001</option><option value="2000">2000</option> <option value="1999">1999</option> <option value="1998">1998</option> <option value="1997">1997</option> <option value="1996">1996</option> <option value="1995">1995</option> <option value="1994">1994</option> <option value="1993">1993</option> <option value="1992">1992</option> <option value="1991">1991</option><option value="1990">1990</option> <option value="1989">1989</option> <option value="1988">1988</option> <option value="1987">1987</option> <option value="1986">1986</option> <option value="1985">1985</option> <option value="1984">1984</option> <option value="1983">1983</option> <option value="1982">1982</option> <option value="1981">1981</option><option value="1980">1980</option> <option value="1979">1979</option> <option value="1978">1978</option> <option value="1977">1977</option> <option value="1976">1976</option> <option value="1975">1975</option> <option value="1974">1974</option> <option value="1973">1973</option> <option value="1972">1972</option> <option value="1971">1971</option><option value="1970">1970</option> <option value="1969">1969</option> <option value="1968">1968</option> <option value="1967">1967</option> <option value="1966">1966</option> <option value="1965">1965</option> <option value="1964">1964</option> <option value="1963">1963</option> <option value="1962">1962</option> <option value="1961">1961</option><option value="1960">1960</option> <option value="1959">1959</option> <option value="1958">1958</option> <option value="1957">1957</option> <option value="1956">1956</option> <option value="1955">1955</option> <option value="1954">1954</option> <option value="1953">1953</option> <option value="1952">1952</option> <option value="1951">1951</option><option value="1950">1950</option> <option value="1949">1949</option> <option value="1948">1948</option> <option value="1947">1947</option> <option value="1946">1946</option> <option value="1945">1945</option> <option value="1944">1944</option> <option value="1943">1943</option> <option value="1942">1942</option> <option value="1941">1941</option><option value="1940">1940</option> <option value="1939">1939</option> <option value="1938">1938</option> <option value="1937">1937</option> <option value="1936">1936</option> <option value="1935">1935</option> <option value="1934">1934</option> <option value="1933">1933</option> <option value="1932">1932</option> <option value="1931">1931</option><option value="1930">1930</option> <option value="1929">1929</option> <option value="1928">1928</option> <option value="1927">1927</option> <option value="1926">1926</option> <option value="1925">1925</option> <option value="1924">1924</option> <option value="1923">1923</option> <option value="1922">1922</option> <option value="1921">1921</option><option value="1920">1920</option> <option value="1919">1919</option> <option value="1918">1918</option> <option value="1917">1917</option> <option value="1916">1916</option> <option value="1915">1915</option> <option value="1914">1914</option> <option value="1913">1913</option> <option value="1912">1912</option> <option value="1911">1911</option><option value="1910">1910</option> <option value="1909">1909</option> <option value="1908">1908</option> <option value="1907">1907</option> <option value="1906">1906</option> <option value="1905">1905</option> <option value="1904">1904</option> <option value="1903">1903</option> <option value="1902">1902</option> <option value="1901">1901</option><option value="1900">1900</option></select></div><div class="form-group" style="margin-bottom: 0px;"><label style="font-size: 12px;margin-top: 10px;font-weight: 600;text-transform: uppercase;width: 100%;">TO YEAR</label><select class="" title=" " data-name="toyear" id="test"><option value="Select Year">Select Year</option><option value="2019">2019</option> <option value="2018">2018</option> <option value="2017">2017</option> <option value="2016">2016</option> <option value="2015">2015</option> <option value="2014">2014</option> <option value="2013">2013</option> <option value="2012">2012</option> <option value="2011">2011</option><option value="2010">2010</option> <option value="2009">2009</option> <option value="2008">2008</option> <option value="2007">2007</option> <option value="2006">2006</option> <option value="2005">2005</option> <option value="2004">2004</option> <option value="2003">2003</option> <option value="2002">2002</option> <option value="2001">2001</option><option value="2000">2000</option> <option value="1999">1999</option> <option value="1998">1998</option> <option value="1997">1997</option> <option value="1996">1996</option> <option value="1995">1995</option> <option value="1994">1994</option> <option value="1993">1993</option> <option value="1992">1992</option> <option value="1991">1991</option><option value="1990">1990</option> <option value="1989">1989</option> <option value="1988">1988</option> <option value="1987">1987</option> <option value="1986">1986</option> <option value="1985">1985</option> <option value="1984">1984</option> <option value="1983">1983</option> <option value="1982">1982</option> <option value="1981">1981</option><option value="1980">1980</option> <option value="1979">1979</option> <option value="1978">1978</option> <option value="1977">1977</option> <option value="1976">1976</option> <option value="1975">1975</option> <option value="1974">1974</option> <option value="1973">1973</option> <option value="1972">1972</option> <option value="1971">1971</option><option value="1970">1970</option> <option value="1969">1969</option> <option value="1968">1968</option> <option value="1967">1967</option> <option value="1966">1966</option> <option value="1965">1965</option> <option value="1964">1964</option> <option value="1963">1963</option> <option value="1962">1962</option> <option value="1961">1961</option><option value="1960">1960</option> <option value="1959">1959</option> <option value="1958">1958</option> <option value="1957">1957</option> <option value="1956">1956</option> <option value="1955">1955</option> <option value="1954">1954</option> <option value="1953">1953</option> <option value="1952">1952</option> <option value="1951">1951</option><option value="1950">1950</option> <option value="1949">1949</option> <option value="1948">1948</option> <option value="1947">1947</option> <option value="1946">1946</option> <option value="1945">1945</option> <option value="1944">1944</option> <option value="1943">1943</option> <option value="1942">1942</option> <option value="1941">1941</option><option value="1940">1940</option> <option value="1939">1939</option> <option value="1938">1938</option> <option value="1937">1937</option> <option value="1936">1936</option> <option value="1935">1935</option> <option value="1934">1934</option> <option value="1933">1933</option> <option value="1932">1932</option> <option value="1931">1931</option><option value="1930">1930</option> <option value="1929">1929</option> <option value="1928">1928</option> <option value="1927">1927</option> <option value="1926">1926</option> <option value="1925">1925</option> <option value="1924">1924</option> <option value="1923">1923</option> <option value="1922">1922</option> <option value="1921">1921</option><option value="1920">1920</option> <option value="1919">1919</option> <option value="1918">1918</option> <option value="1917">1917</option> <option value="1916">1916</option> <option value="1915">1915</option> <option value="1914">1914</option> <option value="1913">1913</option> <option value="1912">1912</option> <option value="1911">1911</option><option value="1910">1910</option> <option value="1909">1909</option> <option value="1908">1908</option> <option value="1907">1907</option> <option value="1906">1906</option> <option value="1905">1905</option> <option value="1904">1904</option> <option value="1903">1903</option> <option value="1902">1902</option> <option value="1901">1901</option><option value="1900">1900</option></select></div></div></div>');
      //$("select").selectpicker();
  });

  //constant userid
  var userid = "fhVq011uDC";
  var token = CSRF_TOKEN;

  // on click continue button
  $(".continue-button").click(function(e)
  {
    e.preventDefault();
    $(".error-box").hide().empty();
    if ($(this).attr("data-step") == 1)
    {
      slideActive(2);
    }
    else if ($(this).attr("data-step") == 2)
    {
      $("#url").removeClass("error");
      var linkedin_url = $("#url").val();
      var valid = /^(ftp|http|https):\/\/[^ "]+$/.test(linkedin_url);
      if ($("#url").val() == "")
      {
        $("#url").addClass("error");
        $(".error-box").empty().fadeIn().append("<li>Please enter url.</li>");
      }
      else if (!valid)
      {
        $("#url").addClass("error");
        $(".error-box").empty().fadeIn().append("<li>Please enter a valid url.</li>");
      }
      else
      {
        //send request to server here
        linkedin_url = encodeURIComponent(linkedin_url);
        var url = "/ajax/step2/";
        console.log("inserted url...");

        $.ajax(
        {
          headers: { "X-CSRFToken": token },
          type: "post",
          url: url,
          data:
          {
            userid: userid,
            url: linkedin_url
          },
          dataType: "json",
          success: function(data)
          {
            console.log(data);
          },
          error: function(error)
          {
            console.log(error);
          }
        });
        // show this slide if no errors
        slideActive(3);
      }
    }
    else if ($(this).attr("data-step") == 3)
    {
      if (!$(this).hasClass("disabled"))
      {
        // fetch work info when page loads
        //send request to server here
        var url = "/ajax/step4a/";
        console.log("fetching work info...");
        $.ajax(
        {
          headers: { "X-CSRFToken": token },
          type: "post",
          url: url,
          data:
          {
            userid: userid
          },
          dataType: "json",
          success: function(data)
          {
            console.log(data);
            data = JSON.parse(data);
            //console.log(data.companies);
            var i;

            $(".work-container").html("");

            for (i = 0; i < data.companies.length; ++i)
            {
              //console.log(data.companies[i].CompanyName);
              $(".work-container").append('<div class="des-form work-box white-boxs"><div class="form-close white-box-remove"><i class="fas fa-times"></i></div><div class="fom"><div class="form-group" style="margin-bottom: 0px"><label style="font-size: 12px;margin-bottom: 0px;">COMPANY</label><div class=""><input type="text" data-name="company information" class="form-control" id="email" placeholder="Write here..." value="'+data.companies[i].CompanyName +'"></div></div><div class="form-group" style="margin-bottom: 0px"><label style="font-size: 12px;margin-bottom: 0px;">LOCATION</label><div class=""><input type="text" data-name="location" class="form-control" id="email" placeholder="Write here..." value="'+data.companies[i].Location +'"></div></div></div></div>');
            }
          },
          error: function(error)
          {
            console.log(error);
          }
        });
        slideActive(4);
      }
    }
    else if ($(this).attr("data-step") == 4)
    {
      var val = true;
      $(".work-box .error").removeClass("error");
      $(".work-box input").each(function()
      {
        if ($(this).val() == "")
        {
          val = false;
          $(this).addClass("error");
          var a = $(this).parents(".work-box").index() + 1;
          var b = $(this).attr("data-name");
          $(".error-box").fadeIn().append("<li>Please enter " + b + " in section " + a + ".</li>");
        }
      });
      if (val == true)
      {
        //send request to server here
        var url = "/ajax/step4b/";
        console.log("updating...");
        var company = $("input[data-name='company information']").map(function()
        {
          return $(this).val();
        }).get();
        console.log(company);
        var locations = $("input[data-name='location']").map(function()
        {
          return $(this).val();
        }).get();
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
        $.ajax(
        {
          headers: { "X-CSRFToken": token },
          type: "post",
          url: url,
          data:
          {
            userid: userid,
            companies: JSON.stringify(result)
          },
          dataType: "json",
          success: function(data)
          {
            console.log(data);
          },
          error: function(error)
          {
            console.log(error);
          }
        });
        // fetch slide 5 data verify education
        var url = "/ajax/step5a/";
        console.log("fetching education...");
        $.ajax(
        {
          headers: { "X-CSRFToken": token },
          type: "post",
          url: url,
          data:
          {
            userid: userid
          },
          dataType: "json",
          success: function(data)
          {
            console.log(data);
            data = JSON.parse(data);
            //console.log(data.companies);
            $(".education-container").html("");

            var i;
            for (i = 0; i < data.schools.length; ++i) 
            {
              //console.log(data.companies[i].CompanyName);
              $(".education-container").prepend('<div class="des-form work-box eduction-box white-boxs" style="padding-bottom: 50px;"><div class="form-close white-box-remove"><i class="fas fa-times"></i></div><div class="fom"><div class="form-group" style="margin-bottom: 0px"><label style="font-size: 12px;margin-bottom: 0px;">SCHOOL</label><div class=""><input type="text" data-name="school"  class="form-control" id="email" placeholder="Write here..." value="' +
              data.schools[i].SchoolName +
              '"></div></div><div class="form-group" style="margin-bottom: 0px"><label style="font-size: 12px;margin-top: 10px;font-weight: 600;text-transform: uppercase;width: 100%;">DEGREE</label><select class="form-control" title=" " id="test" data-name="degree">'+
              '<option>' + data.schools[i].Degree +'</option>' +
              '<option>Select Degree</option><option>Undergraduate</option><option>Bachelors</option><option>Masters</option></select></div><div class="form-group" style="margin-bottom: 0px"><label style="font-size: 12px;margin-top: 10px;font-weight: 600;text-transform: uppercase;width: 100%;margin-bottom: 0px;">STREAM</label><div class=""><input type="text" data-name="stream" id="email" placeholder="Write here..." value="'+
              data.schools[i].FieldOfStudy +
              '"></div></div><div class="form-group" style="margin-bottom: 0px;"><label style="font-size: 12px;margin-top: 10px;font-weight: 600;text-transform: uppercase;width: 100%;">FROM YEAR</label><select class="" title="" data-name="year" id="test"><option class="bs-title-option" value="' +
              data.schools[i].FromYear +
              '">' +
              data.schools[i].FromYear +
              "</option>" +
              '<option value="Select Year">Select Year</option><option value="2019">2019</option> <option value="2018">2018</option> <option value="2017">2017</option> <option value="2016">2016</option> <option value="2015">2015</option> <option value="2014">2014</option> <option value="2013">2013</option> <option value="2012">2012</option> <option value="2011">2011</option><option value="2010">2010</option> <option value="2009">2009</option> <option value="2008">2008</option> <option value="2007">2007</option> <option value="2006">2006</option> <option value="2005">2005</option> <option value="2004">2004</option> <option value="2003">2003</option> <option value="2002">2002</option> <option value="2001">2001</option><option value="2000">2000</option> <option value="1999">1999</option> <option value="1998">1998</option> <option value="1997">1997</option> <option value="1996">1996</option> <option value="1995">1995</option> <option value="1994">1994</option> <option value="1993">1993</option> <option value="1992">1992</option> <option value="1991">1991</option><option value="1990">1990</option> <option value="1989">1989</option> <option value="1988">1988</option> <option value="1987">1987</option> <option value="1986">1986</option> <option value="1985">1985</option> <option value="1984">1984</option> <option value="1983">1983</option> <option value="1982">1982</option> <option value="1981">1981</option><option value="1980">1980</option> <option value="1979">1979</option> <option value="1978">1978</option> <option value="1977">1977</option> <option value="1976">1976</option> <option value="1975">1975</option> <option value="1974">1974</option> <option value="1973">1973</option> <option value="1972">1972</option> <option value="1971">1971</option><option value="1970">1970</option> <option value="1969">1969</option> <option value="1968">1968</option> <option value="1967">1967</option> <option value="1966">1966</option> <option value="1965">1965</option> <option value="1964">1964</option> <option value="1963">1963</option> <option value="1962">1962</option> <option value="1961">1961</option><option value="1960">1960</option> <option value="1959">1959</option> <option value="1958">1958</option> <option value="1957">1957</option> <option value="1956">1956</option> <option value="1955">1955</option> <option value="1954">1954</option> <option value="1953">1953</option> <option value="1952">1952</option> <option value="1951">1951</option><option value="1950">1950</option> <option value="1949">1949</option> <option value="1948">1948</option> <option value="1947">1947</option> <option value="1946">1946</option> <option value="1945">1945</option> <option value="1944">1944</option> <option value="1943">1943</option> <option value="1942">1942</option> <option value="1941">1941</option><option value="1940">1940</option> <option value="1939">1939</option> <option value="1938">1938</option> <option value="1937">1937</option> <option value="1936">1936</option> <option value="1935">1935</option> <option value="1934">1934</option> <option value="1933">1933</option> <option value="1932">1932</option> <option value="1931">1931</option><option value="1930">1930</option> <option value="1929">1929</option> <option value="1928">1928</option> <option value="1927">1927</option> <option value="1926">1926</option> <option value="1925">1925</option> <option value="1924">1924</option> <option value="1923">1923</option> <option value="1922">1922</option> <option value="1921">1921</option><option value="1920">1920</option> <option value="1919">1919</option> <option value="1918">1918</option> <option value="1917">1917</option> <option value="1916">1916</option> <option value="1915">1915</option> <option value="1914">1914</option> <option value="1913">1913</option> <option value="1912">1912</option> <option value="1911">1911</option><option value="1910">1910</option> <option value="1909">1909</option> <option value="1908">1908</option> <option value="1907">1907</option> <option value="1906">1906</option> <option value="1905">1905</option> <option value="1904">1904</option> <option value="1903">1903</option> <option value="1902">1902</option> <option value="1901">1901</option><option value="1900">1900</option></select></div><div class="form-group" style="margin-bottom: 0px;"><label style="font-size: 12px;margin-top: 10px;font-weight: 600;text-transform: uppercase;width: 100%;">TO YEAR</label><select class="" title=" " data-name="toyear" id="test"><option class="bs-title-option" value="' +
              data.schools[i].ToYear +
              '">' +
              data.schools[i].ToYear +
              "</option>" +
              '<option value="Select Year">Select Year</option><option value="2019">2019</option> <option value="2018">2018</option> <option value="2017">2017</option> <option value="2016">2016</option> <option value="2015">2015</option> <option value="2014">2014</option> <option value="2013">2013</option> <option value="2012">2012</option> <option value="2011">2011</option><option value="2010">2010</option> <option value="2009">2009</option> <option value="2008">2008</option> <option value="2007">2007</option> <option value="2006">2006</option> <option value="2005">2005</option> <option value="2004">2004</option> <option value="2003">2003</option> <option value="2002">2002</option> <option value="2001">2001</option><option value="2000">2000</option> <option value="1999">1999</option> <option value="1998">1998</option> <option value="1997">1997</option> <option value="1996">1996</option> <option value="1995">1995</option> <option value="1994">1994</option> <option value="1993">1993</option> <option value="1992">1992</option> <option value="1991">1991</option><option value="1990">1990</option> <option value="1989">1989</option> <option value="1988">1988</option> <option value="1987">1987</option> <option value="1986">1986</option> <option value="1985">1985</option> <option value="1984">1984</option> <option value="1983">1983</option> <option value="1982">1982</option> <option value="1981">1981</option><option value="1980">1980</option> <option value="1979">1979</option> <option value="1978">1978</option> <option value="1977">1977</option> <option value="1976">1976</option> <option value="1975">1975</option> <option value="1974">1974</option> <option value="1973">1973</option> <option value="1972">1972</option> <option value="1971">1971</option><option value="1970">1970</option> <option value="1969">1969</option> <option value="1968">1968</option> <option value="1967">1967</option> <option value="1966">1966</option> <option value="1965">1965</option> <option value="1964">1964</option> <option value="1963">1963</option> <option value="1962">1962</option> <option value="1961">1961</option><option value="1960">1960</option> <option value="1959">1959</option> <option value="1958">1958</option> <option value="1957">1957</option> <option value="1956">1956</option> <option value="1955">1955</option> <option value="1954">1954</option> <option value="1953">1953</option> <option value="1952">1952</option> <option value="1951">1951</option><option value="1950">1950</option> <option value="1949">1949</option> <option value="1948">1948</option> <option value="1947">1947</option> <option value="1946">1946</option> <option value="1945">1945</option> <option value="1944">1944</option> <option value="1943">1943</option> <option value="1942">1942</option> <option value="1941">1941</option><option value="1940">1940</option> <option value="1939">1939</option> <option value="1938">1938</option> <option value="1937">1937</option> <option value="1936">1936</option> <option value="1935">1935</option> <option value="1934">1934</option> <option value="1933">1933</option> <option value="1932">1932</option> <option value="1931">1931</option><option value="1930">1930</option> <option value="1929">1929</option> <option value="1928">1928</option> <option value="1927">1927</option> <option value="1926">1926</option> <option value="1925">1925</option> <option value="1924">1924</option> <option value="1923">1923</option> <option value="1922">1922</option> <option value="1921">1921</option><option value="1920">1920</option> <option value="1919">1919</option> <option value="1918">1918</option> <option value="1917">1917</option> <option value="1916">1916</option> <option value="1915">1915</option> <option value="1914">1914</option> <option value="1913">1913</option> <option value="1912">1912</option> <option value="1911">1911</option><option value="1910">1910</option> <option value="1909">1909</option> <option value="1908">1908</option> <option value="1907">1907</option> <option value="1906">1906</option> <option value="1905">1905</option> <option value="1904">1904</option> <option value="1903">1903</option> <option value="1902">1902</option> <option value="1901">1901</option><option value="1900">1900</option></select></div></div></div>');

              // $(".education-container").append('<div class="white-box mb-35 mt-30 mb-30 eduction-box">' +
              //     '<div class="white-box-remove"><i class="fas fa-times"></i></div>' +
              //     '<div class="form-group form-group-inline mb-30 form-group-inline-change"><label>School</label><input type="text" data-name="school" value="' +
              //     data.schools[i].SchoolName +
              //     '"></div>' +
              //     '<div class="form-group form-group-inline mb-30 form-group-inline-change" style="margin-top: -7px;margin-bottom: 0px;"><label>Degree</label><select style="" class="form-control" title=" " id="test" data-name="degree" tabindex="-98">' +
              //     "<option>" +
              //     data.schools[i].Degree +
              //     '</option>" ' +
              //     '<option value="Select Degree">Select Degree</option> <option value="Undergraduate">Undergraduate</option> <option value="Bachelors">Bachelors</option> <option value="Masters">Masters</option>' +
              //     "</select>" +
              //     "</div>" +
              //     '<div class="form-group form-group-inline form-group-inline-change" style="margin-top: -7px;"><label>Stream</label><input type="text" data-name="stream" value="' +
              //     data.schools[i].FieldOfStudy +
              //     '"></div>' +
              //     '<h5 class="sub-heading text-center mt-5px mb-30 form-sub-change">As per your degree certificate.</h5>' +
                  // '<div class="form-group form-group-inline form-group-inline-change"><label>From year</label><select style="top: -8px;" class="" title=" " data-name="year" tabindex="-98"><option class="bs-title-option" value="' +
                  // data.schools[i].FromYear +
                  // '">' +
                  // data.schools[i].FromYear +
                  // "</option>" +
              //     '<option value="Select Year">Select Year</option><option value="2019">2019</option> <option value="2018">2018</option> <option value="2017">2017</option> <option value="2016">2016</option> <option value="2015">2015</option> <option value="2014">2014</option> <option value="2013">2013</option> <option value="2012">2012</option> <option value="2011">2011</option> <option value="2010">2010</option> <option value="2009">2009</option> <option value="2008">2008</option> <option value="2007">2007</option> <option value="2006">2006</option> <option value="2005">2005</option> <option value="2004">2004</option> <option value="2003">2003</option> <option value="2002">2002</option> <option value="2001">2001</option> <option value="2000">2000</option> <option value="1999">1999</option> <option value="1998">1998</option> <option value="1997">1997</option> <option value="1996">1996</option> <option value="1995">1995</option> <option value="1994">1994</option> <option value="1993">1993</option> <option value="1992">1992</option> <option value="1991">1991</option> <option value="1990">1990</option> <option value="1989">1989</option> <option value="1988">1988</option> <option value="1987">1987</option> <option value="1986">1986</option> <option value="1985">1985</option> <option value="1984">1984</option> <option value="1983">1983</option> <option value="1982">1982</option> <option value="1981">1981</option> <option value="1980">1980</option> <option value="1979">1979</option> <option value="1978">1978</option> <option value="1977">1977</option> <option value="1976">1976</option> <option value="1975">1975</option> <option value="1974">1974</option> <option value="1973">1973</option> <option value="1972">1972</option> <option value="1971">1971</option> <option value="1970">1970</option> <option value="1969">1969</option> <option value="1968">1968</option> <option value="1967">1967</option> <option value="1966">1966</option> <option value="1965">1965</option> <option value="1964">1964</option> <option value="1963">1963</option> <option value="1962">1962</option> <option value="1961">1961</option> <option value="1960">1960</option> <option value="1959">1959</option> <option value="1958">1958</option> <option value="1957">1957</option> <option value="1956">1956</option> <option value="1955">1955</option> <option value="1954">1954</option> <option value="1953">1953</option> <option value="1952">1952</option> <option value="1951">1951</option> <option value="1950">1950</option> <option value="1949">1949</option> <option value="1948">1948</option> <option value="1947">1947</option> <option value="1946">1946</option> <option value="1945">1945</option> <option value="1944">1944</option> <option value="1943">1943</option> <option value="1942">1942</option> <option value="1941">1941</option> <option value="1940">1940</option> <option value="1939">1939</option> <option value="1938">1938</option> <option value="1937">1937</option> <option value="1936">1936</option> <option value="1935">1935</option> <option value="1934">1934</option> <option value="1933">1933</option> <option value="1932">1932</option> <option value="1931">1931</option> <option value="1930">1930</option> <option value="1929">1929</option> <option value="1928">1928</option> <option value="1927">1927</option> <option value="1926">1926</option> <option value="1925">1925</option> <option value="1924">1924</option> <option value="1923">1923</option> <option value="1922">1922</option> <option value="1921">1921</option> <option value="1920">1920</option> <option value="1919">1919</option> <option value="1918">1918</option> <option value="1917">1917</option> <option value="1916">1916</option> <option value="1915">1915</option> <option value="1914">1914</option> <option value="1913">1913</option> <option value="1912">1912</option> <option value="1911">1911</option> <option value="1910">1910</option> <option value="1909">1909</option> <option value="1908">1908</option> <option value="1907">1907</option> <option value="1906">1906</option> <option value="1905">1905</option> <option value="1904">1904</option> <option value="1903">1903</option> <option value="1902">1902</option> <option value="1901">1901</option> <option value="1900">1900</option>' +
              //     "</select></div>" +
              //     '<div class="form-group mt-30 form-group-inline form-group-inline-change" style="margin-top: 3px;"><label>To year</label><select style="margin-top: 0px;" class="" title=" " data-name="toyear" tabindex="-98"><option class="bs-title-option" value="' +
              //     data.schools[i].ToYear +
              //     '">' +
              //     data.schools[i].ToYear +
              //     "</option>" +
              //     '<option value="Select Year">Select Year</option><option value="2019">2019</option> <option value="2018">2018</option> <option value="2017">2017</option> <option value="2016">2016</option> <option value="2015">2015</option> <option value="2014">2014</option> <option value="2013">2013</option> <option value="2012">2012</option> <option value="2011">2011</option> <option value="2010">2010</option> <option value="2009">2009</option> <option value="2008">2008</option> <option value="2007">2007</option> <option value="2006">2006</option> <option value="2005">2005</option> <option value="2004">2004</option> <option value="2003">2003</option> <option value="2002">2002</option> <option value="2001">2001</option> <option value="2000">2000</option> <option value="1999">1999</option> <option value="1998">1998</option> <option value="1997">1997</option> <option value="1996">1996</option> <option value="1995">1995</option> <option value="1994">1994</option> <option value="1993">1993</option> <option value="1992">1992</option> <option value="1991">1991</option> <option value="1990">1990</option> <option value="1989">1989</option> <option value="1988">1988</option> <option value="1987">1987</option> <option value="1986">1986</option> <option value="1985">1985</option> <option value="1984">1984</option> <option value="1983">1983</option> <option value="1982">1982</option> <option value="1981">1981</option> <option value="1980">1980</option> <option value="1979">1979</option> <option value="1978">1978</option> <option value="1977">1977</option> <option value="1976">1976</option> <option value="1975">1975</option> <option value="1974">1974</option> <option value="1973">1973</option> <option value="1972">1972</option> <option value="1971">1971</option> <option value="1970">1970</option> <option value="1969">1969</option> <option value="1968">1968</option> <option value="1967">1967</option> <option value="1966">1966</option> <option value="1965">1965</option> <option value="1964">1964</option> <option value="1963">1963</option> <option value="1962">1962</option> <option value="1961">1961</option> <option value="1960">1960</option> <option value="1959">1959</option> <option value="1958">1958</option> <option value="1957">1957</option> <option value="1956">1956</option> <option value="1955">1955</option> <option value="1954">1954</option> <option value="1953">1953</option> <option value="1952">1952</option> <option value="1951">1951</option> <option value="1950">1950</option> <option value="1949">1949</option> <option value="1948">1948</option> <option value="1947">1947</option> <option value="1946">1946</option> <option value="1945">1945</option> <option value="1944">1944</option> <option value="1943">1943</option> <option value="1942">1942</option> <option value="1941">1941</option> <option value="1940">1940</option> <option value="1939">1939</option> <option value="1938">1938</option> <option value="1937">1937</option> <option value="1936">1936</option> <option value="1935">1935</option> <option value="1934">1934</option> <option value="1933">1933</option> <option value="1932">1932</option> <option value="1931">1931</option> <option value="1930">1930</option> <option value="1929">1929</option> <option value="1928">1928</option> <option value="1927">1927</option> <option value="1926">1926</option> <option value="1925">1925</option> <option value="1924">1924</option> <option value="1923">1923</option> <option value="1922">1922</option> <option value="1921">1921</option> <option value="1920">1920</option> <option value="1919">1919</option> <option value="1918">1918</option> <option value="1917">1917</option> <option value="1916">1916</option> <option value="1915">1915</option> <option value="1914">1914</option> <option value="1913">1913</option> <option value="1912">1912</option> <option value="1911">1911</option> <option value="1910">1910</option> <option value="1909">1909</option> <option value="1908">1908</option> <option value="1907">1907</option> <option value="1906">1906</option> <option value="1905">1905</option> <option value="1904">1904</option> <option value="1903">1903</option> <option value="1902">1902</option> <option value="1901">1901</option> <option value="1900">1900</option>' +
              //     "</select></div>" +
              //     "</div>"
              // );
            }
          },
          error: function(error)
          {
            console.log(error);
          }
        });
        slideActive(5);
      }
    } 
    else if ($(this).attr("data-step") == 5) {
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
            step6b();
          },
          error: function(error) {
            console.log(error);
          }
        });

        // fetch User Groups (fetch user groups, when page loads)

        slideActive(6);
      }
    }
  });

  function step6b() {
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
        $(".cha-list").html("");

        var i;
        for (i = 0; i < data.groups.companyGroups.length; ++i) {
          //console.log(data.companies[i].CompanyName);
          var checked = "checked";
          console.log(data.groups.companyGroups[i].status);
          if (data.groups.companyGroups[i].status == true) {
            checked = "checked";
            console.log("checked true");
          } else {
            checked = "";
          }
          $(".cha-list").append(
            '<li><div class="chanel-list-left">' +
              data.groups.companyGroups[i].group +
              '</div><div class="chanel-list-right"><div class="custom-checkbox"><input type="checkbox" class="chanel-checkbox" data-group="' +
              data.groups.companyGroups[i].group +
              '"' +
              'id="chk0' +
              i +
              '"' +
              checked +
              '><label for="chk0' +
              i +
              '"></label></div></div></li>'
          );
        }
        $(".cha-list-school").html("");

        var i;
        for (i = 0; i < data.groups.schoolGroups.length; ++i) {
          //console.log(data.companies[i].CompanyName);
          var checked = "checked";
          console.log(data.groups.schoolGroups[i].status);
          if (data.groups.schoolGroups[i].status == true) {
            checked = "checked";
            console.log("checked true");
          } else {
            checked = "";
          }
          $(".cha-list-school").append(
            '<li><div class="chanel-list-left">' +
              data.groups.schoolGroups[i].group +
              '</div><div class="chanel-list-right"><div class="custom-checkbox"><input type="checkbox" data-group="' +
              data.groups.schoolGroups[i].group +
              '" class="chanel-checkbox"' +
              'id="chk3' +
              i +
              '"' +
              checked +
              '><label for="chk3' +
              i +
              '"></label></div></div></li>'
          );
        }
      },
      error: function(error) {
        console.log(error);
      }
    });
  }

  // on-off change
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

  // header click
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

  // back button
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

  // pagecheck (validation)
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

  // slideActive
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

  // skip button
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
        $(".work-container").html("");
        for (i = 0; i < data.companies.length; ++i) {
          //console.log(data.companies[i].CompanyName);

          $(".work-container").append('<div class="des-form work-box white-boxs"><div class="form-close white-box-remove"><i class="fas fa-times"></i></div><div class="fom"><div class="form-group" style="margin-bottom: 0px"><label style="font-size: 12px;margin-bottom: 0px;">COMPANY</label><div class=""><input type="text" data-name="company information" class="form-control" id="email" placeholder="Write here..." value="'+data.companies[i].CompanyName +'"></div></div><div class="form-group" style="margin-bottom: 0px"><label style="font-size: 12px;margin-bottom: 0px;">LOCATION</label><div class=""><input type="text" data-name="location" class="form-control" id="email" placeholder="Write here..." value="'+data.companies[i].Location +'"></div></div></div></div>');
          // $(".work-container").append(
          //   '<div class="white-box mb-35 mt-30 mb-30 work-box"><div class="white-box-remove"><i class="fas fa-times"></i></div><div class="form-group form-group-inline mb-30"><label>Company</label><input type="text" data-name="company information" value="' +
          //     data.companies[i].CompanyName +
          //     '" ></div><div class="form-group form-group-inline"><label>Location</label><input type="text" data-name="location" value="' +
          //     data.companies[i].Location +
          //     '"></div></div>'
          // );
        }
      },
      error: function(error) {
        console.log(error);
      }
    });
    slideActive(4);
  });
  
  $("#linkedin-form").submit(function(event) {
    //alert("Form Submitted");
    //event.preventDefault();
  });
  $(document).on("click", ".white-box-remove", function() {
    $(this)
      .parents(".white-box")
      .remove();
  });
  $(document).on("click", ".white-box-remove", function() {
    $(this)
      .parents(".white-boxs")
      .remove();
  });
  
});
