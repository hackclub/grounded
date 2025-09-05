# Submitting KiCad to Grounded

Uniquely for KiCad, you'll need:

- `.kicad_pcb`, file representing the KiCad PCB Layout
- `.kicad_sch`, for your schematic
- `.kicad_pro`, your project file
- `.wrl` 3D Model of your PCB

All within the `/src` folder in your project directory.

To get the first three, simply save all your KiCad files and close out of KiCad, then navigate to the directory and copy those three files into another folder and give them appropriate names.

For `schematic.pdf`, you'll want to be in the KiCad schematic editor, then go to **File > Plot > Plot Current Page**, after changing the output directory to where you want to put it. You'll need to rename the schematic to `schematic.pdf`. Ensure you've selected to plot all pages and have it in PDF.

Lastly, for your `.wrl` 3D Model, go to your KiCad PCB editor then go to **File > Export > VRML**, then press OK. Make sure you have **"User Defined Origin"** set and output it to the correct directory. Ensure it has an appropriate name.

### **This is _in addition_ to standard required files in the root `README.md` file.**

In all, you should have the following files under your project folder:

📝 **README.md**: A filled out [TEMPLATE.md](./projects/!Template/>TEMPLATE.md?plain=1), renamed to `README.md`

🖼️ **cart.png**: A [screenshot](./docs/images/ordering/cart.png) of your order details

🗜️ **gerber.zip**: The file you send off to the vendor

📄 **schematic.pdf**: Exported from your EDA program as a PDF
- Go to **File > Export > PDF** in EasyEDA's Schematic tab for this

This is as well as the KiCad files in the `/src` folder as listed above.