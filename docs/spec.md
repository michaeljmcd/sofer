# Sofer - A Mobile Application for Etext Transcription #

In my time, I have transcribed a few etexts for Project Gutenberg, mostly in the
area of more obscure authors and topics that do not have convenient etexts
available. Moreso if texts are available neither as free downloads nor as paid
ebooks through the major sellers.

My time to sit at a PC and explicitly work on these texts has only gone down
with time. However, I find myself frequently fiddling with my phone and it is
seldom anything of worth. Why not take some of that time that I am doing nothing
of consequence while waiting and funneling it into transcribing etexts?

That is the fundamental goal of Sofer.

## Platform ##

My mobile devices are all Android, at the moment. A relatively recent phone and
a lower-end tablet. My primary platform will be Android, but I want to write the
application in such a way as creating iOS builds will be a matter of building
and testing.

Therefore, the long-term platform goal is to support all major smartphone and
tablet manufacturers.

## Overview ##

Generally speaking, I have found transcription to follow a workflow not unlike
the following:

![Etext Transcription Workflow](img/transcription-workflow.png)

Some of these steps may be optional. For example, it may be that no OCR engine
is available or that the sample was not workable with OCR.

## Screen Layouts ##

In the mockups that follow, a simple forbidden icon is used to indicate an
unspecified icon. That is to say, the icon's precise appearance is not dictated
in the mockup, but its presence is.

Due to the intrinsic difficulty in determining the precise device type being
used, the "tablet" view will always be displayed for landscape oriented devices
and the "phone" view will always be displayed for portrait oriented devices.

### Main Screen ###

Upon starting the application, the main screen should be displayed. The last
transcription project should be loaded, if one already exists. The basic
workspace should have the following layout:

![Main Screen - Tablet View](img/main-screen-tablet.png)

The left-most pane should display the selected scanset (it should be possible to
have multiple scansets associated with a single text conversion; this is most
likely when one set of scans is less than ideal and is supplemented by a second
set of scans).

The right-hand pane should be a Markdown editor that displays the text as
currently provided by the user.

Finally, the top bar should provide menu options for various common operations
that the user may need to take.

The phone view of this same screen would have the following layout:

![Main Screen - Phone View](img/main-screen-phone.png)

In both mockups, the items in the toolbar expand out to menus. In the latter
mockup, the Source, Text and About items are in an accordion view in order to
save space. Figures demonstrating the expansions of the other tabs are
demonstrated below.

![Main Screen - Phone View](img/main-screen-phone2.png)
