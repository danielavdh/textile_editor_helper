// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require turbolinks
//= require textile-editor
//= require textile-editor-config
//= require_self

var ready;
ready = function() {
	$("#loginName").focus();
	///////////////////////////////////////////////////
	/////////////////  PREVIEW  ///////////////////////
	///////////////////////////////////////////////////
	// Array to hold top position of text_areas
	vdh.textareas = [];
	// Array to store the content of these textareas
	vdh.previews = [];
	// collect the text_areas from form (if any)
	$("textarea").each(function(){
		//vdh.textareas.push($(this).offset().top)
		vdh.textareas.push($(this))
	});
	// collect the preview elements which hold the preview text
	$(".preview_text").each(function(){
		vdh.previews.push($(this));
	});
	// position the preview elements next to their text_areas
	for(i=0; i<vdh.textareas.length; i++){
		var id = vdh.textareas[i].attr("id");
		vdh.previews[i].attr("id", "preview_" + id);
		var top = (vdh.textareas[i].offset().top) - 124;
		vdh.previews[i].css("top", top + "px");
	}
	// listen to previewable textareas
	$("textarea.editor_and_preview").keyup(function(e){
		vdh.getChangedText($(this)[0]);
	});
	// hide help
	$("#editor_and_preview_help").css("display", "none");
	$("#editor_and_preview_help").click(function(){
		$(this).css("display", "none");
		$("#preview_title").css("display", "block");
		$("#preview").css("display", "block");
	});
}
$(document).ready(ready);
$(document).on('page:change', ready);

var vdh = {
	initialize_editor_and_preview: function(){
		/* <![CDATA[ */
		$.each($('textarea.editor_and_preview'),function(i,el){
			TextileEditor.initialize($(el).attr('id'));
		});
		/* ]]> */
	},
	///////////////////////////////////////////////////
	/////////////////  PREVIEW  ///////////////////////
	///////////////////////////////////////////////////
	//textareas: null,
	//previews: null,
	preview: null,
	preview_element: null,
	textarea: null, 
	// show help  
	display_textile_editor_help: function(){
		$("#editor_and_preview_help").css("display", "block");
		$("#preview_title").css("display", "none");
		$("#preview").css("display", "none");
	},
	find_preview_element: function(textarea){
		// make the html textarea object (js) into a jquery object
		vdh.preview_element = $(textarea);
		vdh.preview = vdh.preview_element.val();
	},
	getChangedText: function(textarea){
		vdh.find_preview_element(textarea);
		if(vdh.preview_element.length>0){
			$.ajax({
  				type: "POST",
  				url: "/admins/preview",
  				data: { preview: vdh.preview, attribute_id: textarea.getAttribute("id") }
			}).done(function() {
  				//alert( "Data Saved: " );
			});
		}
	},
	ext_link_alert: "EXTERNAL_ADDRESS_HERE",
	// this replaces "EXTERNAL_ADDRESS_HERE" with the content of the prompt in the passed textarea
	getExternalLink: function(textarea){
		if(vdh.lang=="de"){
			var link=prompt("Bitte gewünschte Webadresse eingeben (am einfachsten: neues Browserfenster öffnen, zur gewünschten Seite navigieren, Adresse von Adressleiste kopieren und hier einfügen).\nExterne Adressen immer mit \"http:\/\/\" beginnen, dann öffnet die Seite in einem neuen Fenster!")
		}else{
			var link=prompt("Please enter address (e.g. open page in a new browser window, then copy the address from the address bar).\nThe address should start with \"http:\/\/\" to ensure the link will open in a new window!");
		}
		if (link!=null && link!=""){
			preview_element = $(textarea);
  			var str = preview_element.val().replace(vdh.ext_link_alert, link);
			preview_element.val(str);
		}
	},
	email_alert: "PLEASE_ENTER_EMAIL_ADDRESS_HERE",
	// this replaces "PLEASE_ENTER_EMAIL_ADDRESS_HERE" with the content of the prompt in the passed textarea
	getEmailAddress: function(textarea){
		//vdh.find_preview_element(textarea);
		if(vdh.lang=="de"){
			var email=prompt("Bitte gewünschte E-mailadresse eingeben (kopieren und einfügen ist am einfachsten)")
		}else{
			var email=prompt("Please enter email address (copy and paste is easiest).");
		}
		if (email!=null && email!=""){
			preview_element = $(textarea);
  			var str = preview_element.val().replace(vdh.email_alert, email);
			preview_element.val(str);
  		}
	},
	link_alert: "CHOOSE_INTERNAL_LINK",
	// choose link and then update preview (called from select box)
	internalLinkSelected: function(sel){
		var jq_textarea = $(sel).parent().parent().siblings("textarea");
		var textarea = jq_textarea[0];
		var str = jq_textarea.val().replace(vdh.link_alert, sel.value);
		jq_textarea.val(str);
		$(sel).parent().hide("slow");
		vdh.getChangedText(textarea);
	},
	image_alert: "CHOOSE IMAGE NOW",
	// choose link and then update preview (called from select box)
	imageSelected: function(sel){
		var jq_textarea = $(sel).parent().parent().siblings("textarea");
		var textarea = jq_textarea[0];
		var str = jq_textarea.val().replace(vdh.image_alert, sel.value);
		jq_textarea.val(str);
		$(sel).parent().hide("slow");
		vdh.getChangedText(textarea);
	}
}