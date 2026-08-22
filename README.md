# Processing-Question-Focus
A PCI-based Psycholinguistic Experiment on Processing Linguistic Focus
# 汉语迷宫任务 · Mandarin Maze Reading Task (PCIbex)

> A browser-based **mandarin maze / forced-choice word-by-word reading** experiment
> built with [PCIbex Farm](https://pcibex.net/) (PennController).
>
> 一个基于 PCIbex Farm（PennController）搭建的**汉语迷宫 / 强制选择逐词阅读**实验。

---

## 实验简介 · Overview

迷宫范式（maze task）是一种受控的逐词阅读任务：每个试次中，被试要在每一词位置上的
「正确词 / 干扰词」之间做强制选择，选错必须重选，从而以最小干扰的方式记录逐词阅读时间。

每个试次（trial）由三段组成：

1. **情境提示 `Message`** —— 呈现一段背景句，末尾留空，提示被试「点击下方链接开始造句」。
2. **逐词强制选择 `Maze`** —— 被试在「正确词 / 干扰词」之间逐词做强制选择；选错会提示
   「✗ 请重新选择」并要求重选（通过自定义 `Maze` 控制器实现）。
3. **阅读理解 `Question`** —— 一道真/假陈述题，按键 **F = 错**，**J = 对**。

实验流程（`Sequence`）为：

```
welcome → instructions → 练习(16题, 随机) → break → 其中一个平衡列表(80题, 随机) → debriefing
```

通过 `PennCounterBalance(4, ...)` 实现**被试间平衡**：每位被试只看到 4 个列表
（List 1–4）中的 1 个。

---

## 设计参数 · Design

| 项目 Item | 说明 Description |
|------|------|
| 实验项目 Items | 80 个（每个列表 20 项 × 4 Group） |
| 条件 Conditions | 8 个（Condition 1–8，分两组：Cond 1–4 / Cond 5–8） |
| 平衡列表 Counterbalanced lists | 4 个（List 1–4），通过条件轮转实现被试间平衡 |
| 练习项目 Practice | 16 个 |
| 标签格式 Label format | `Group_X_Condition_Y_SZZ`（实验）/ `p_Group_X_Condition_Y_SZZ`（练习） |

## 语料设计 · Stimuli Design

本实验操纵**信息结构 / 焦点（focus）**：通过不同的上下文问句实现四种焦点条件，目标句保持一致。

| 焦点条件 Focus Condition | 上下文句 Context Sentence | 目标句 Target Sentence |
|------|------|------|
| Verum focus（确证焦点） | 小明想吃葡萄吗？ | 她说她想吃葡萄。 |
| Corrective focus（纠错焦点） | 小明想吃香蕉吗？ | 她说她想吃葡萄。 |
| Disjunction focus（析取焦点） | 小明想吃葡萄还是香蕉？ | 她说她想吃葡萄。 |
| Wh-focus（疑问焦点） | 小明说了什么？ | 她说她想吃葡萄。 |

> **标签格式 Label format**：`Group_X_Condition_Y_SZZ`（实验）/ `p_Group_X_Condition_Y_SZZ`（练习）。详见上方「设计参数」一节。


---

## 仓库结构 · Repository Structure

| 文件 File | 说明 Description |
|------|------|
| `main.js` | **实验脚本（核心）**。自包含，所有试次内联写在文件中，通过 `Sequence` + `PennCounterBalance` 控制流程。<br>⚠️ 本文件使用自定义 `Maze` 控制器，但**不在本仓库中定义**——部署时需在 PCIbex Farm 项目中以 *JavaScript Include* 形式加入该控制器（如原项目中的 `Maze.js`）。 |
| `data_embedded.js` / `data.json` | 由脚本自动生成的数据导出（练习 + 各列表的项目信息），便于查看/复用；实验实际以 `main.js` 内联内容为准。 |
| `items.csv` | 合并后的全部项目表（练习 + 4 个列表）。 |
| `list1.csv`–`list4.csv` | 四个平衡列表的实验项目（不含练习）。 |
| `practice.csv` | 16 个练习项目。 |
| `merged_all_lists.csv` | 合并的全部列表数据。 |
| `IBEX_Maze_List1.xlsx`–`List4.xlsx` | 原始刺激模板（每个 80 行）。 |
| `Maze_with Context_Template.xlsx` | 练习项目模板（16 行）。 |
| `*.xlsx.bak` | 模板备份文件，**未纳入版本控制**（见 `.gitignore`）。 |

### Python 脚本 · Python scripts (一次性数据准备 / 转换 / 平衡工具)

- **`convert_to_pcibex.py`** —— 读取上面的 xlsx 模板，转换为 PCIbex 兼容的 CSV
  （`items.csv` / `practice.csv` / `list1–4.csv`）。
- **`redistribute_groups.py`** —— 把 80 个项目重新分配到 4 个 Group 并重新编号 `S01–S20`。
- **`redistribute_v2.py`** —— 按旋转模式进一步平衡分组。<br>
  ⚠️ 该脚本中硬编码了本地绝对路径 `/Users/jeremyp./Desktop/实验2/...`，在其他机器上运行前需先改为相对路径或实际源路径；末尾另残留一段 `PYEOF` 标记，运行前需删除。

---

## 本地生成数据 · Generate Data Locally

仅需重新生成 CSV / 检查刺激时使用。

**依赖 Dependencies**

- Python 3 + `openpyxl`（用于读写 xlsx）：

  ```bash
  pip install openpyxl
  ```

**运行 Run**

```bash
python convert_to_pcibex.py        # xlsx 模板 → PCIbex CSV
# python redistribute_groups.py    # 重新分配 Group（如需）
# python redistribute_v2.py        # 进一步平衡旋转（如需，先修路径）
```

---

## 部署到 PCIbex Farm · Deploy

1. 在 [PCIbex Farm](https://pcibex.net/) 新建项目。
2. 把 `main.js` 作为项目脚本（替换默认 `main.js`）。
3. **加入自定义 `Maze` 控制器**（JavaScript Include）——本仓库未包含，请从原项目复制进来，否则实验无法运行。
4. （可选）若想改为「数据驱动」而非内联，可用 `convert_to_pcibex.py` 重新生成 CSV，并改用 `Template` / `getTable` 方式读取；当前 `main.js` 为内联版本。
5. 在 PCIbex Farm 上 **Sync / Run** 即可。

---

## 数据分析 · Data Analysis

收集到的逐词阅读时间（RT）按 **条件级别 2.5 SD 裁剪（condition-level 2.5 SD trimming）**
进行清洗：

- 删除缺失值与非正 RT（`NA` / `RT ≤ 0`）。
- 在每个 `Condition` 内计算均值与标准差，保留落在区间
  `[mean − 2.5·SD, mean + 2.5·SD]` 内的试次。
- 输出裁剪前后的 `N / Mean / SD / SE` 汇总，以及被剔除比例。


## 注意事项 · Notes & Caveats

- **自定义 `Maze` 控制器不在仓库内**：`main.js` 依赖名为 `Maze` 的控制器，部署时必须自行提供。
- **硬编码路径**：`redistribute_v2.py` 含本地绝对路径，跨机器运行前需修改。
- **`.bak` 备份文件被忽略**：见 `.gitignore`（`*.bak`、`*.DS_Store`）。
- **数据为内联**：`main.js` 中所有试次为内联定义；`data_embedded.js` / `data.json` 仅作导出参考。

---

Cognition.
