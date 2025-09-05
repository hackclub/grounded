# How to Order from JLCPCB

First time ordering from JLCPCB, or PCBs in general? Or do you just need a refresher on ordering PCBs? Either way, you're in the right place!

## Getting Gerbers

PCB fabs take files called **Gerbers**. These are essentially outputted directions from whatever software you used (EasyEDA, KiCAD, etc) that contains information about the copper on the board, any silkscreen designs you have, and where to drill holes.

Getting Gerbers is easy. They are usually under some sort of `export` or `output` section of your software.

## Uploading to JLCPCB

Once you have your Gerbers, make sure they are zipped up so you can upload the folder all in one piece.

## What the Heck are These Settings?

PCB fabs have **a lot** of settings for board manufacturing, and JLCPCB is no exception. Here's a rundown on what each section means:

### Base Options

![Base options](https://hc-cdn.hel1.your-objectstorage.com/s/v3/fc216d24e8d528d6ad0abca756f77ef570c2da01_base-options.png)

- **Base Material**: Use FR-4.
- **Layers**: 2 or 4 layers are most common.
- **Dimensions**: Auto-filled from your Gerbers.
- **PCB QTY**: Choose 5 (minimum allowed).
- **Product Type**: Keep as Industrial/Consumer Electronics.

### PCB Specifications

![PCB specs](https://hc-cdn.hel1.your-objectstorage.com/s/v3/6d9b4cd159608e80a8102356a7af5b2d6973a447_pcb-specifications.png)

- **Different Design**: Auto-calculated.
- **Delivery Format**: Use `Single PCB`.
- **PCB Thickness**: Keep at 1.6mm.
- **PCB Color**: Green is cheapest.
- **Surface Finish**: Lead-free HASL or ENIG.

### High-spec Options

![High-spec options](https://hc-cdn.hel1.your-objectstorage.com/s/v3/d5ccaac60a89163f1e602b053c8b63d8b13e800d_high-spec-options.png)

## PCB Assembly

Choose one of two assembly options for your PCB. **Assembly by JLCPCB** is the quickest and easiest.

### Assembly by JLCPCB

![Assembly options](https://hc-cdn.hel1.your-objectstorage.com/s/v3/a6fe8bd721b5c5fb98e09f8cdc78c75afb591e4b_assembly.png)

- **PCBA Type**: Choose Economic.
- **PCBA Qty**: 2 is enough to save cost.
- **Confirm Parts Placement**: Optional, useful check.

Then upload your `bom.csv` and `positions.csv` (KiCad) or `BOM_PCB.csv` and `PickAndPlace.csv` (EasyEDA).

![BOM Upload](https://hc-cdn.hel1.your-objectstorage.com/s/v3/712ec605dca59fa99ae56a22f0a1125befd9a068_bom.png)

If parts like the NFC antenna are unselected, click *"Do Not Place"*.

![Orientation](https://hc-cdn.hel1.your-objectstorage.com/s/v3/9cdf44ed3edd19917da5a82fa9920a7c4790a1d0_orientation.png)

Note: Resistors/capacitors are symmetrical, but diodes, LEDs, and ICs are not.

### Assemble Yourself with a Stencil

Don't want to pay extra for assembly? DIY is a great, hands-on learning option, but it's for **advanced hackers** only.

You'll need a soldering iron, solder paste, and a heat gun or reflow tool.

![Stencil](https://hc-cdn.hel1.your-objectstorage.com/s/v3/38e294ff4d70aef27b91a2680c90539b8bc8345f_stencil.png)

Learn more: [YouTube guide](https://www.youtube.com/watch?v=5AyxuuFjZSI) or [PCB Elec guide](https://www.pcbelec.com/how-to-use-pcb-stencil.html)

## Cart

Click **checkout** and fill out your information.

> To avoid excess shipping fees or customs, check out the [Shipping Tips](../community/shipping.md) doc!

Then choose "Pay after Review" or "Pay Directly", and click **Submit Order**.

![Submit order](https://hc-cdn.hel1.your-objectstorage.com/s/v3/7faa4f457bb8e28b9a1e4bb43b1b94da9987df7b_submit-order.png)

Once asked for payment info, you can just close the tab.

## PCB Review

Go to [My Orders](https://jlcpcb.com/user-center/orders/) and take a screenshot like below:

![Cart screenshot](https://hc-cdn.hel1.your-objectstorage.com/s/v3/51761af33c599ad46040b56176a516b543293c64_cart.png)

Name it exactly `cart.png` for GitHub submission.