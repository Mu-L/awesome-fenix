(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{632:function(t,e,r){"use strict";r.r(e);var n=r(11),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"分布式共识算法"}},[t._v("分布式共识算法")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("前置知识")]),t._v(" "),r("p",[t._v("关于分布式中 CAP 问题，请先阅读“"),r("RouterLink",{attrs:{to:"/architect-perspective/general-architecture/transaction/distributed.html"}},[t._v("分布式事务")]),t._v("”中的介绍，后文中提及的一致性、可用性、网络分区等概念，均在此文中有过介绍。")],1)]),t._v(" "),r("p",[t._v("正式开始探讨分布式环境中面临的各种技术问题和解决方案以前，我们先把目光从工业界转到学术界，学习两三种具有代表性的分布式共识算法，为后续分布式环境中操作共享数据准备好理论基础。下面笔者从一个最浅显的场景开始，引出本章的主题：")]),t._v(" "),r("blockquote",[r("p",[t._v("如果你有一份很重要的数据，要确保它长期存储在电脑上不会丢失，你会怎么做？")])]),t._v(" "),r("p",[t._v("这不是什么脑筋急转弯的古怪问题，答案就是去买几块硬盘，把数据在不同硬盘上多备份几个副本。假设一块硬盘每年损坏的概率是 5%，那把文件复制到另一块备份盘上，由于两块硬盘同时损坏而丢失数据的概率就只有 0.25%，如果使用三块硬盘存储则是 0.00125%，四块是 0.0000625%，换而言之，这已经保证了数据在一年内有超过 99.9999%的概率是安全可靠的。")]),t._v(" "),r("p",[t._v("在软件系统里，要保障系统的"),r("strong",[t._v("可靠性")]),t._v("，采用的办法与那几个备份硬盘并没有什么区别。单个节点的系统宕机无法访问数据的原因可能有很多，譬如程序出错、硬件损坏、网络分区、电源故障，等等，一年中出现系统宕机的概率也许还要高于 5%，这决定了软件系统也必须有多台机器能够拥有一致的数据副本，才有可能对外提供可靠的服务。")]),t._v(" "),r("p",[t._v("在软件系统里，要保障系统的"),r("strong",[t._v("可用性")]),t._v("，面临的困难与硬盘备份却又有着本质的区别。硬盘之间是孤立的，不需要互相通信，备份数据是静态的，初始化后状态就不会发生改变，由人工进行的文件复制操作，很容易就保障了数据在各个备份盘中是一致的；然而分布式系统里面，我们必须考虑动态的数据如何在不可靠的网络通信条件下，依然能在各个节点之间正确复制的问题。将我们要讨论的场景作如下修改：")]),t._v(" "),r("blockquote",[r("p",[t._v("如果你有一份会随时变动的数据，要确保它正确地存储于网络中的几台不同机器之上，你会怎么做？")])]),t._v(" "),r("p",[t._v("相信最容易想到的答案一定是“数据同步”：每当数据有变化，把变化情况在各个节点间的复制视作一种事务性的操作，只有系统里每一台机器都反馈成功地完成硬盘写入后，数据的变化才宣告成功，笔者曾经在“"),r("RouterLink",{attrs:{to:"/architect-perspective/general-architecture/transaction/global.html"}},[t._v("全局事务")]),t._v("”中介绍过，使用 2PC/3PC 就可以实现这种同步操作。同步的其中一种真实应用场景是数据库的主从全同步复制（Fully Synchronous Replication），譬如 MySQL Cluster，进行全同步复制时，会等待所有 Slave 节点的 Binlog 都完成写入后，Master 节点的事务才进行提交（这个场景中 Binlog 本身就是要同步的状态数据，不应将它看作是指令日志的集合）。然而这里有一个显而易见的缺陷，尽管可以确保 Master 节点和 Slave 节点中的数据是绝对一致的，但任何一个 Slave 节点因为任何原因未响应均会阻塞整个事务，每增加一个 Slave 节点，都导致造成整个系统可用性风险增加一分。")],1),t._v(" "),r("p",[t._v("以同步为代表的数据复制方法，被称为"),r("strong",[t._v("状态转移")]),t._v("（State Transfer），这类方法是较符合人类思维的可靠性保障手段，但通常要以牺牲可用性为代价。我们在建设分布式系统的时候，往往不能承受这样的代价，一些关键系统，必须保障数据正确可靠的前提下，对可用性的要求也非常苛刻，譬如系统要保证数据要达到 99.999999%可靠，同时系统也要达到 99.999%可用的程度，这就引出了我们的第三个问题：")]),t._v(" "),r("blockquote",[r("p",[t._v("如果你有一份会随时变动的数据，要确保它正确地存储于网络中的几台不同机器之上，并且要尽可能保证数据是随时可用的，你会怎么做？")])]),t._v(" "),r("p",[t._v("可靠性与可用性的矛盾造成了增加机器数量反而带来可用性的降低，为缓解这个矛盾，在分布式系统里主流的数据复制方法是以"),r("strong",[t._v("操作转移")]),t._v("（Operation Transfer）为基础的。我们想要改变数据的状态，除了直接将目标状态赋予它之外，还有另一种常用的方法是通过某种操作，令源状态转换为目标状态。能够使用确定的操作，促使状态间产生确定的转移结果的计算模型，在计算机科学中被称为"),r("strong",[t._v("状态机")]),t._v("（State Machine）。")]),t._v(" "),r("div",{staticClass:"quote"},[r("p",{staticClass:"title"},[t._v("额外知识：状态机复制")]),r("p",[r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Finite-state_machine",target:"_blank",rel:"noopener noreferrer"}},[t._v("状态机"),r("OutboundLink")],1),t._v("有一个特性：任何初始状态一样的状态机，如果执行的命令序列一样，则最终达到的状态也一样。如果将此特性应用在多参与者进行协商共识上，可以理解为系统中存在多个具有完全相同的状态机（参与者），这些状态机能最终保持一致的关键就是起始状态完全一致和执行命令序列完全一致。")])]),r("p",[t._v("根据状态机的特性，要让多台机器的最终状态一致，只要确保它们的初始状态是一致的，并且接收到的操作指令序列也是一致的即可，无论这个操作指令是新增、修改、删除抑或是其他任何可能的程序行为，都可以理解为要将一连串的操作日志正确地广播给各个分布式节点。广播指令与指令执行期间，允许系统内部状态存在不一致的情况，即并不要求所有节点的每一条指令都是同时开始、同步完成的，只要求在此期间的内部状态不能被外部观察到，且当操作指令序列执行完毕时，所有节点的最终的状态是一致的，这种模型就被称为"),r("strong",[t._v("状态机复制")]),t._v("（State Machine Replication）。")]),t._v(" "),r("p",[t._v("考虑到分布式环境下网络分区现象是不可能消除的，甚至允许不再追求系统内所有节点在任何情况下的数据状态都一致，而是采用“少数服从多数”的原则，一旦系统中过半数的节点中完成了状态的转换，就认为数据的变化已经被正确地存储在系统当中，这样就可以容忍少数（通常是不超过半数）的节点失联，使得增加机器数量对系统整体的可用性变成是有益的，这种思想在分布式中被称为“"),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Quorum_(distributed_computing)",target:"_blank",rel:"noopener noreferrer"}},[t._v("Quorum 机制"),r("OutboundLink")],1),t._v("”。")]),t._v(" "),r("p",[t._v("根据上述讨论，我们需要设计出一种算法，能够让分布式系统内部暂时容忍存在不同的状态，但最终能够保证大多数节点的状态达成一致；同时，能够让分布式系统在外部看来始终表现出整体一致的结果。这个让系统各节点不受局部的网络分区、机器崩溃、执行性能或者其他因素影响，都能最终表现出整体一致的过程，就被称为各个节点的"),r("strong",[t._v("协商共识")]),t._v("（Consensus）。")]),t._v(" "),r("p",[t._v("最后，笔者还要提醒你共识（Consensus）与一致性（Consistency）的区别：一致性是指数据不同副本之间的差异，而共识是指达成一致性的方法与过程。由于翻译的关系，很多中文资料把 Consensus 同样翻译为一致性，导致网络上大量的“二手中文资料”将这两个概念混淆起来，如果你在网上看到“分布式一致性算法”，应明白其指的其实是“Distributed Consensus Algorithm”。")])])}),[],!1,null,null,null);e.default=s.exports}}]);