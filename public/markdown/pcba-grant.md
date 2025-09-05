# Grounded PCB Grant - Get up to $1k for a PCB

---

Every teen under 18 (or 18) will receive up to **$1k** to cover PCB manufacturing costs, and join a community of peers — some more beginner and some more experienced.

## Requirements

- Unique and open-source design
- Must be orderable on JLCPCB
- Must be in high school or younger and show proof of school enrollment to submit

**NOTE: Grounded does not accept more than one "tutorial project" per person**

## Getting Started

### 1. Join `#electronics` on Slack!

Our [#electronics](https://hackclub.slack.com/archives/C0948RT0C1M) channel is where the party is getting started! Sign up to our community via [this link](https://hackclub.com/slack/?event=grounded).

### 2. Create your Github Repo & Start Your Journal

Create a git repository for your project! Most people use GitHub, but you can use any git provider you want.

#### 📝 Start Your Journal (Required!)

Create a `JOURNAL.md` file in your repo. At the very top, include the following data:

```
---
Title: "Your PCB Project Name"
Author: "Your name (name or slack username)"
Description: "Describe your PCB project in a short sentence!"
Created On: "10/7/2025"
---
```

⚠️ **Journaling is mandatory for PCB grants! Poor quality journals will be rejected.**

#### How to Journal Your PCB Project

Document your progress every day! The general formatting should look like this:

```
# June 8th: Got the screen to work!

[actual journal content - what did you do?]

[insert pictures of what you're working on!]

**Total time spent: 2h**
```

**Do NOT have:**
- Wall of timestamps with barely any descriptions
- No images
- Terrible formatting that's impossible to read
- AI generated journal entries; anything written by AI will be immediately rejected

### 3. Design a Board!

Most people reading this will be new to PCB design, so we've made a simple tutorial on making an example board. Check out our [PCB tutorials](https://jams.hackclub.com/tag/pcb). Also, see `PCB Resources`. Note: Only one tutorial project is allowed per person.

*If you get stuck or want more example projects, post in the Slack channel.*

**NOTE: The price limit is $1k for PCBs made in EasyEDA Pro but only $30 for PCBs made in any other EDA software**

## Example Projects

- [PCB Business Card with NFC, "Hackercard"](https://jams.hackclub.com/jam/hacker-card)
- [Build a USB Hub](https://jams.hackclub.com/batch/usb-hub)
- [Make a Digital Level](https://jams.hackclub.com/batch/sparkletilt-pcb)

### 4. Upload to a Vendor and Take a Screenshot

Upload your Gerber files to [JLCPCB.com](https://jlcpcb.com/) and take a screenshot after you finish checkout.

> Curious about order settings or shipping tips?  
> See `How to Order from JLCPCB`

![Cart Screenshot](https://hc-cdn.hel1.your-objectstorage.com/s/v3/51761af33c599ad46040b56176a516b543293c64_cart__1_.png)

**Note:** Screenshot is **required** for project approval.

### 5. Complete Your Repository Files

Your repository needs to contain the following files:

- `README.md`: It also needs to contain photos of your schematic/rendered PCB
- `JOURNAL.md`: Your complete project journal documenting your progress
- `gerber.zip`: This should be the file that you send off to the vendor
- `schematic.pdf`: Export the schematic from your EDA program as a PDF
  - Go to File → Export → PDF in EasyEDA's Schematic tab for this
- `src/`: Make a folder called src and whatever format your designer outputs should be included
  - For EasyEDA STD, you need to File → Export → EasyEDA two JSON files - one from the schematic tab and one from the PCB tab
    - Optionally, for EasyEDA STD, export a 3D Model as .obj and save it to the /src folder
  - For KiCad, add the .kicad_pcb, .kicad_sch and .kicad_pro files to your /src folder

**IMPORTANT!! Required for EasyEDA Grants!!!**

Make sure to follow all EasyEDA export requirements above for your submission to be approved.

### 6. Submit your project!

If your project is made in Ki-Cad and/or costs less than $30, you can simply fill out the form below without a Oshwlab link. However, if you would like to have the full $1,000 cost limit, follow the instructions in `OSHWLabs Starts Submission Guide`

Submit the required details through this form:

[🔗 Grounded PCB Grant](https://forms.hackclub.com/grounded)

### 7. Ship it!

Share your board in [#electronics](https://hackclub.slack.com/archives/C056AMWSFKJ)!

![PCB Sharing](https://hc-cdn.hel1.your-objectstorage.com/s/v3/54d28c4e1c05457e39b2191c79389a7e550aad65_john-sharing-pcb.png)

### 8. Update your journal when you get your PCB

Write about your time spent hacking with the PCB in-person and be sure to include hours. Include your time spent getting it to work and it's use in other projects.

## Tips for Success

- Keep your journal updated daily - small, consistent entries are better than large sporadic ones
- Document your failures too! They're just as important as your successes
- Include plenty of photos and screenshots throughout your process
- Ask questions in the Slack channel - the community is there to help!
- Be resourceful with your budget - every dollar saved helps fund the next program