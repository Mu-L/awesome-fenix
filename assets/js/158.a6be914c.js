(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{699:function(t,e,r){"use strict";r.r(e);var a=r(11),_=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"从软件的历史看架构的未来"}},[t._v("从软件的历史看架构的未来")]),t._v(" "),r("div",{staticClass:"quote"},[r("p",{staticClass:"title"},[t._v("软件架构与硬件算力规模对齐")]),r("p",[t._v("As long as there were no machines, programming was no problem at all; when we had a few weak computers, programming became a mild problem, and now we have gigantic computers, programming has become an equally gigantic problem.")]),t._v(" "),r("p",[t._v("在没有计算机的时候，也就没有编程问题；当我们有了简单的计算机，编程只是个小问题；而现在我们有了算力规模庞大的计算机，那编程就成为了一个同样巨大的问题了。")]),t._v(" "),r("div",{staticClass:"custom-block right"},[r("p",[t._v("—— "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Edsger_W._Dijkstra",target:"_blank",rel:"noopener noreferrer"}},[t._v("Edsger Dijkstra"),r("OutboundLink")],1),t._v(", "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Communications_of_the_ACM",target:"_blank",rel:"noopener noreferrer"}},[t._v("Communications of the ACM"),r("OutboundLink")],1),t._v(", 1972")])])]),r("p",[t._v("1972年，"),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Edsger_W._Dijkstra",target:"_blank",rel:"noopener noreferrer"}},[t._v("Edsger Dijkstra"),r("OutboundLink")],1),t._v("在图灵奖颁授现场发表的获奖感言中说到：“在没有计算机的时候，不存在编程问题；当我们有了简单的计算机，编程只是个小问题；而现在我们有了算力规模庞大的计算机，那编程也就成为了一个同样巨大的问题了”。半个世纪前Dijkstra就已经敏锐洞见了机器算力的提升是软件发展的直接牵引，每当人类掌握了更强的算力，总会按耐不住想去解决一些以前甚至都不敢去设想的新问题。该如何设计编程模式才能驾驭好机器，是软件架构要解决的最本质问题。")]),t._v(" "),r("h2",{attrs:{id:"过去：历史上的软件危机和契机"}},[t._v("过去：历史上的软件危机和契机")]),t._v(" "),r("p",[t._v("计算机刚诞生不久的年代，硬件的算力规模还很小，甚至程序员的大脑就足够记住数据在几KB内存中的分布细节，记住每项操作在电路中的运行逻辑。此时的计算机尽管运算速度比人类快，但并内部没有什么事情人所不知道的；此时的软件开发也并没有独立的“架构”可言，软件架构与硬件架构是直接物理对齐的。")]),t._v(" "),r("p",[t._v("随着计算机的发展，直接面向硬件架构的开发很快触碰到瓶颈，人脑的生物局限显然无法跟上机器算力迅捷的前进步伐，这便是历史上的第一次软件危机的根源——当世界上最聪明的人都无法为机器编写出合理的程序了，计算机科学还能继续发展吗？第一次软件危机发生，是高级语言和结构化编程出现的契机，高级语言屏蔽大多数硬件细节，获得了相对良好的抽象能力与可移植性，结构化编程强化了可独立编写、可重复利用的子程序的思想，让软件的每个局部都可以设计独立的算法和数据结构，从而在整体上控制住了软件开发的复杂度，允许每一位程序员只关注自己所负责的部分。此时，软件的架构才开始独立于硬件而存在，软件业开始出现架构师（把控全局）与程序员（聚焦局部）的角色分工。")]),t._v(" "),r("p",[t._v("通过将软件从整体拆分为多个局部个体，人类能够以群体配合来共同开发一个软件，令人类与计算机又和谐共处了十余年，但是机器的算力规模不断膨胀，人类群体的协作沟通能力却终有极限，这就是第二次软件危机。人毕竟不是可复制的程序，每个人都有自己的理解与认知，如何让每个模块都能准确的协同工作就成了一场灾难。《人月神话》中有一个几乎每位程序员都读过的案例：IBM公司为开发的OS/360系统投入成本达到了美国的“曼哈顿”原子弹计划的25%，共有4000多个模块，约100万条指令，超过5000人年，耗资数亿美元，结果还是延期交付，在交付使用后的系统中仍发现大量的错误。")]),t._v(" "),r("div",{staticClass:"quote"},[r("p",{staticClass:"title"},[t._v("An Introduction to Software Architecture")]),r("p",[t._v("As the size of software systems increases, the algorithms and data structures of the computation no longer constitute the major design problems. When systems are constructed from many components, the organization of the overall system-the software architecture-presents a new set of design problems.")]),t._v(" "),r("p",[t._v("随着软件系统规模的增加，计算相关的算法和数据结构不再构成主要的设计问题；当系统由许多部分组成时，整个系统的组织，也就是所说的“软件架构”，导致了一系列新的设计问题。")]),t._v(" "),r("div",{staticClass:"custom-block right"},[r("p",[t._v("——David Garlan and Mary Shaw, "),r("a",{attrs:{href:"https://userweb.cs.txstate.edu/~rp31/papers/intro_softarch.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("An Introduction to Software Architecture"),r("OutboundLink")],1),t._v(", 1994")])])]),r("p",[t._v("应对第二次软件危机的过程中，面向对象的编程逐步取代了面向过程的结构化编程成为主流的设计思想，追求最符合人类思维的视角来抽象问题取代了追求最符合机器运行特征的算法与数据结构成为软件架构的最优先原则。许多直至今天仍然十分重要的设计原则，如开闭原则（OCP）、迪米特原则（LOD）、里氏替换原则（LSP）等，都是这个阶段诞生的。这次危机还促使软件工程学的出现， 如何以系统性的、规范化的、可定量的方法去高质量地开发和维护软件成为一门独立的科学。")]),t._v(" "),r("h2",{attrs:{id:"现在：云与分布式渐成为主流"}},[t._v("现在：云与分布式渐成为主流")]),t._v(" "),r("p",[t._v("如果说历史上的第一、二次软件危机分别是机器算力规模超过了人类个体的生理极限，超过了人类群体的沟通极限的话。那么在今天，在云计算的时代，数据中心所能提供的算力其实也已经逼近了人类协作的工程极限，与此算力相符的程序规模，几乎也到达了无论如何优化工程措施、无论采用什么管理手段去提升质量，都不可能避免仍然会出现错误的程度。越来越多程序员认可，只要时间足够长，环境足够复杂，就肯定会有人疏忽犯错，会有代码携带缺陷，会有电脑宕机崩溃，会有网络堵塞中断……如果一项工程需要大量的人员共同去研发某个大规模的软件产品，并使其分布在网络中大量的服务器节点中同时运行，随着项目规模的增大、运作时间变长，其必然会受到墨菲定律的无情打击。")]),t._v(" "),r("p",[t._v("目前，人们用以匹配数据中心算力规模的程序多是以微服务为主要架构形式的分布式系统，微服务兴起以后，曾涌现出各类文章去总结、赞美微服务带来的种种好处，诸如简化部署、逻辑拆分更清晰、便于技术异构、易于伸缩拓展应对更高的性能等等，这些当然都是重要优点。可是，如果不拘泥于特定场景定某个问题，以宏观的角度来看，前面所列这种种好处却都只能算是“锦上添花”、是属于让系统“活得更好”的动因，肯定比不上系统如何“确保生存”的需求来得关键本质。笔者看来，本次架构演进最重要的驱动力，或者说从单体到微服务的最根本的驱动力，就是为了方便某个服务能够顺利地“死去”与“重生”，个体服务的生死更迭，是关系到整个系统能否可靠续存的关键因素。")]),t._v(" "),r("p",[t._v("举个例子，譬如某企业中应用的单体架构的 Java 系统，其更新、升级都必须要有固定的停机计划，必须在特定的时间窗口内才能按时开始，必须按时结束。如果出现了非计划的宕机，那便是生产事故。但是软件的缺陷不会遵循领导定下的停机计划来“安排时间出错”，为了应对缺陷与变化，做到不停机地检修，Java 曾经搞出了 OSGi 和 JVMTI Instrumentation 等这样复杂的 HotSwap 方案，以实现给奔跑中的汽车更换轮胎这种匪夷所思却又无可奈何的需求；而在微服务架构的视角下，所谓系统检修，不过只是一次在线服务更新而已，先停掉 1/3 的机器，升级新的软件版本，再有条不紊地导流、测试、做金丝雀发布，一切都是显得如此理所当然、平淡寻常；而在无服务架构的视角下，我们甚至都不可能去关心服务所运行的基础设施，连机器是哪台都不必知道，停机升级什么的就根本无从谈起了。")]),t._v(" "),r("p",[t._v("流水不腐，有老朽，有消亡，有重生，有更迭才是生态运行的合理规律。请设想一下，如果系统中每个部件都符合“可消亡可重生”的特性，哪怕其中某些部件采用了由极不靠谱的人员所开发的极不靠谱程序代码，哪怕存有严重的内存泄漏问题，最多只能服务三分钟就一定会崩溃。而即便这样，只要在整体架构设计有恰当的、自动化的错误熔断、服务淘汰和重建的机制，在系统外部来观察，整体上仍然有可能表现出稳定和健壮的服务能力。")]),t._v(" "),r("h2",{attrs:{id:"未来：云不可知，道不可名"}},[t._v("未来：云不可知，道不可名")]),t._v(" "),r("p",[t._v("软件架构的演进由人与机器的矛盾所驱动，逐渐与算力规模对齐，我们不妨顺着这个思路，思考软件开发的下一个核心矛盾将会是什么？以此窥探下一个时代的软件架构会具备何种特征？")]),t._v(" "),r("p",[t._v("经过良好设计的分布式系统，拥有局部的可再生性，可以在部件层面管理生命周期，在整体上展现出可靠的服务能力。然而问题并没有完全解决，“良好地设计”一个分布式系统并不容易，今天无限火热的云原生、微服务、不可变基础设施、弹性计算、服务网格、无服务器架构、高低零代码，等等，背后都能展开成一整套成体系的开发或者架构方法。这些新的技术在为人们解决了更复杂软件问题的同时，也正在把编程这件事情本身推向更高层次的复杂度。")]),t._v(" "),r("p",[t._v("软件开发的下一个核心矛盾是算力规模超过人应掌握合理的知识极限。一名刚刚走出学校的本科生，要消化完若干编程语言的核心细节，要掌握领域中常用的类库、框架和工具，要理解分布式系统的服务发现、容错、限流等设计技巧，要接触容器、云原生、弹性计算等运行架构层面的原理，耗费上十年的时间都毫不奇怪。")]),t._v(" "),r("p",[t._v("在哲学里，曾经严肃研讨过“知识膨胀”的问题，说的是人类科学的前沿在不断拓展，触及到前沿所需的基础知识也不断增加，是否会陷入后来者终其一生都无法攒下足够基础，导致人类知识陷入止步不前的危机之中。在计算机科学里，知识膨胀通常表现为从毕业到“35岁退休”（梗）之前，多数程序员恐怕都不具备设计分布式架构所需的全面知识。")]),t._v(" "),r("p",[t._v("软件的DFX属性将会逐渐外置，而不是像现在这样，主要在开发阶段预置于代码中。一个程序是以单体还是以分布式运行，需要提供怎样的SLA，具体与什么组件进行协作，通讯中是否要容错限流，等等，都不必在开发期决定，也不必由业务开发人员去关心，他们只处理那些承载系统业务价值的功能属性。这种状态的系统就如同是一个人，上战场便穿上军装，要游泳便穿上泳衣，去舞会便穿上礼服，不同的装备让人能适应不同的场景。这些“可穿戴”的装备，大多数是由专业厂商设计的，内部专门面向DFX的技术专家也可能会进行少量补充。")]),t._v(" "),r("p",[t._v("今天已经逐渐成熟的服务网格架构就开始展露出一些这方面的特征，Sidecar以流量劫持的方式，能够为程序间的网络通讯额外附加上连接稳定性（如重试、熔断）、安全性（如鉴权、双向通讯加密）、可管理性和可观测性，既不需要程序员去专门编码设计，也不依赖某款语言或者框架的预置代码。")]),t._v(" "),r("p",[t._v("目前的服务网格的仅能够处理与网络通讯相关的属性，而软件肯定不止通讯这一项能力，通常软件都会依赖多种提供不同能力的运行时，譬如高级语言虚拟机提供执行能力、消息队列提供Pub/Sub通知能力、容器编排系统提供生命周期管理能力，等等，程序员去使用这些能力时，也一样面临着对服务质量属性的需求。")]),t._v(" "),r("p",[t._v("迄今为止，可以在生产环境中应用的面向外挂非功能属性的架构还十分少见，微软DAPR这一款。它通过……")]),t._v(" "),r("p",[t._v("但这是未来架构的一个主流方向，只有把那些复杂的问题关进笼子，从软件开发中移开，普通程序员参与，以后甚至通过低代码、无代码的支持，那些基本不具备程序设计知识，但是具有丰富业务知识的专家，也可能设计出优秀的软件，而非仅单纯的搭积木。")]),t._v(" "),r("h2",{attrs:{id:"人与架构"}},[t._v("人与架构")]),t._v(" "),r("p",[t._v("以后分布式软件的开发，会由较少量的负责架构和质量属性的专家，与大量的负责功能属性的业务程序员去协作完成。")]),t._v(" "),r("p",[t._v("系统的运行环境应该是不可知的，今天的云原生，强调")]),t._v(" "),r("p",[t._v("以后分布式软件的运行，会消弭不同运行时")]),t._v(" "),r("p",[t._v("由专业的")]),t._v(" "),r("p",[t._v("针对这个矛盾，未来，软件架构很可能会从强调云原生，到关注以，以云原生方式运行；从强调分布式，到以单体开发，以")]),t._v(" "),r("p",[t._v("如果说")]),t._v(" "),r("p",[t._v("具有物理隔离和容错设计的分布式系统，将生命周期从产品的整体中拆分出来")]),t._v(" "),r("p",[t._v("具有服务网格支持的分布式系统，将网络通讯从产品的整体中拆分出来")]),t._v(" "),r("p",[t._v("DFX属性从软件开发中分离出来，让业务人员写业务代码，有专门的团队去维护DFX。")]),t._v(" "),r("p",[t._v("建筑设计师负责绘制图纸，进行受力分析，建筑工人负责填充水泥钢筋，搭建完整个建筑。")]),t._v(" "),r("p",[t._v("未来的软件开发对普通程序员是友善的，但是对普通程序员友善的背后，预示着未来的信息技术行业很可能也会出现“阶级分层”的现象，由于更先进的软件架构已经允许更平庸的开发者也同样能写出可运行、可用于生产的软件产品，同时又对精英开发者提出更多、更复杂的技术要求，长此以往，在开发者群体中会出现比现在还要显著的"),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Matthew_effect",target:"_blank",rel:"noopener noreferrer"}},[t._v("马太效应"),r("OutboundLink")],1),t._v("。如果把整个软件业界这个看作一个巨大组织的话，它也应会符合康威定律，软件架构的趋势将导致开发者的分层，从如今所有开发者都普遍被认为是“高智商人群”的状态，转变为大部分工业化软件生产工人加上小部分软件设计专家的金字塔结构。")])])}),[],!1,null,null,null);e.default=_.exports}}]);