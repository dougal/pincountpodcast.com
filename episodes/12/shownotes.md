---
number: 12
title: Episode 12 - That'd Be a Pretty Small Truck
subtitle: AMD Deep Learning, various Intel news and trivia, and a whole swathe of new AWS products.
date: '2016-12-20T21:19:28+00:00'
guid: e0a9f7ccf258e5a2e6c4c41939e80461b2e6b8c5cea763d94ec7a7be02bf3da5
audio_duration: FILLED_IN_BY_SYNC_COMMAND
audio_file_size: FILLED_IN_BY_SYNC_COMMAND
---

* AMD Deep Learning Announcements
  * [Instinct announcement](http://radeon.com/en-us/instinct/)
  * [Anandtech coverage](http://www.anandtech.com/show/10905/amd-announces-radeon-instinct-deep-learning-2017)
  * [Hacker News Discussion](https://news.ycombinator.com/item?id=13159943)
  * [Linux kernel refusing AMD patche](https://lists.freedesktop.org/archives/dri-devel/2016-December/126516.html)
* Intel GPU Internals
  * [Intel gpu design](https://software.intel.com/sites/default/files/managed/89/92/Intel-Graphics-Architecture-ISA-and-microarchitecture.pdf )
  * [Expiring Intel-Nvidia patent cross-licensing to expire in 2017 - Ryan Smith](https://twitter.com/RyanSmithAT/status/806212965129011200)
* [Agner’s CPU Blog - Knights Landing](http://agner.org/optimize/blog/read.php?i=761)
  * [Kola Superdeep Borehole](https://en.wikipedia.org/wiki/Kola_Superdeep_Borehole)
* [Intel x86 documentation has more pages than the 6502 has transistors](http://www.righto.com/2013/09/intel-x86-documentation-has-more-pages.html)
* [Unlocked Intel i3 Processor: i3-7350k](http://hexus.net/tech/news/cpu/99700-purported-intel-kaby-lake-core-i3-7350k-benchmarks-emerge/)
* [Intel self driving cars](http://www.anandtech.com/show/10872/intel-forms-new-group-for-autonomous-vehicles-and-announces-250m-investment)
* [Emulated Intel on arm](http://www.anandtech.com/show/10889/microsoft-and-qualcomm-bring-windows-10-to-snapdragon-processors)
* [Bluetooth 5 now available](https://www.bluetooth.com/news/pressreleases/2016/12/07/bluetooth-5-now-available)
  * "Next year it will work great" - [John Gruber](http://daringfireball.net/linked/2016/12/07/bluetooth)
* AWS re:Invent 2016
  * [James Hamilton Talk](https://www.youtube.com/watch?v=AyOAjFNPAbA)
    * ASICS for their own switches. [@0:23:00](https://youtu.be/AyOAjFNPAbA?t=1380)
      * 7B transistors
      * 128 ports of 25Gbe = 3.2Tbps (!!!!)
    * Own silicon for NICs. [@0:30:20](https://youtu.be/AyOAjFNPAbA?t=1820)
      * Dropping networking to hardware rather than kernel
    * Storage nodes [@0:40:50](https://youtu.be/AyOAjFNPAbA?t=2450)
      * 2015 design is 1,110 disks/rack
      * 11PB with current-gen HDD
      * Weighs 2,778 lbs (1,262 kg)
      * [Backblaze Pod](https://www.backblaze.com/blog/open-source-data-storage-server/)
    * Compute nodes [@0:42:00](https://youtu.be/AyOAjFNPAbA?t=2520)
      * Half-empty rack-mount case
      * Optimised for thermal and power efficiency, not density of compute
      * 3-5x less dense than off-the-shelf "cloud" servers
  * [AWS Snowball Edge](https://aws.amazon.com/blogs/aws/aws-snowball-edge-more-storage-local-endpoints-lambda-functions/)
  * [AWS Snowmobile](https://aws.amazon.com/blogs/aws/aws-snowmobile-move-exabytes-of-data-to-the-cloud-in-weeks/)
  * [Elastic GPUs](https://aws.amazon.com/blogs/aws/in-the-work-amazon-ec2-elastic-gpus/)
    * GPUs that can be attached to ANY EC2 instance.
    * Examples show Windows desktop applications using them.
    * OpenGL support only.
    * 1, 2, 4, 8GB sizes.
    * [Dolphinics PCIe switches](http://www.dolphinics.com/products/pent-dxseries-dxs410.html)
  * [EC2 F1 Instances w. FPGA](https://aws.amazon.com/blogs/aws/ec2-instance-type-update-t2-r4-f1-elastic-gpus-i3-c5/)
    * FPGA choo choo
* [Liberouter Combo cards](https://www.liberouter.org/technologies/cards/)
* Aftershow
  * [Leftpad As A Service](http://left-pad.io/)
