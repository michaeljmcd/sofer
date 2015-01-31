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

Upon starting the application, the main screen should be displayed. The last
transcription project should be loaded, if one already exists.
