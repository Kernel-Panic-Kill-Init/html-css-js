## LLM Prompt Injection Lab

# **LLMs don’t lie maliciously — they lie convincingly.**

**Interactive, hands-on lab for exploring prompt injection and instruction hierarchy abuse** in Large Language Models — without exploits, jailbreak tools, or code execution.

This project focuses on logic, context manipulation, and role confusion to demonstrate how even well-constrained LLM systems can be coerced into unsafe or unintended behavior.

---

# 🎯 **Purpose**

The goal of this lab is to help users **understand how LLMs actually fail.**

**Not** by breaking software — but by breaking assumptions.

You will:

interact with a constrained LLM system,

attempt to manipulate it using only language,

observe where and why the model violates its original rules.

**This is LLM Red Teaming in a safe, educational sandbox.**

---

# 🧠 **What This Is (and is NOT)**

**This is:**

· a learning sandbox for prompt injection techniques,

· an educational Red Team–style lab,

· focused on instruction hierarchy and context control,

· useful for security engineers, AI engineers, and curious hackers.

**This is NOT:**

· a jailbreak collection,

· a hacking toolkit,

· an exploit framework,

· a guide to bypass real-world safeguards.

**No scans. No exploits. No malware. Just language.**

---

# 🧩 **Core Concepts Covered**

· Instruction hierarchy (System > Developer > User)

· Role and authority confusion

· Context smuggling

· Instruction shadowing

· Over-trust in user-provided context

**Each lab scenario isolates one failure mode at a time.**

---

#🧪 **How the Lab Works (High-Level)**

1. You are presented with a **fixed system prompt** (read-only).

2. The model has explicit constraints and rules.

3. You interact with the model as a user.

4. Your goal is to make the model violate its constraints **using only prompts.**

5. After completion, the lab explains:

· what failed,

· why it failed,

· which assumption was abused.

*Think of it as a **logic puzzle**, not a hack.*

---

#🕹️***Lab Structure (Planned)**

· Multiple independent scenarios ("levels")

· Each level focuses on a single attack pattern

· Clear success/failure conditions

· Post-level debrief explaining the vulnerability

The difficulty increases gradually — from obvious failures to subtle, realistic cases.

---

#👀 **Who This Is For**

Security engineers curious about AI attack surfaces

Red / Blue / Purple Team practitioners

AI engineers building LLM-powered systems

Anyone who wants to understand why prompt injection works

*No prior AI expertise required — just curiosity.*

---

# ⚠️** Ethical Notice**

This project is intended for **defensive, educational purposes only.**

All scenarios are:

· isolated,

· synthetic,

· designed to improve understanding and mitigation of LLM risks.

**Do not use** these techniques against systems you do not own or have permission to test.

---

#📌 **Project Status**

🟡 Early development

Planned next steps:

· Architecture design

· First playable scenario

· Minimal UI

---

#📄 **License**

**MIT**

If this project makes you uncomfortable — that’s the point.


