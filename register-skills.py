#!/usr/bin/env python3
import json, os, re, secrets, string, shutil
from datetime import datetime, timezone
from pathlib import Path

MANIFEST = Path("/home/lordmuffin/.config/Claude/local-agent-mode-sessions/skills-plugin/e71a0b59-928d-4666-a01b-890ab3253c6e/8c2db713-02bf-431d-9059-11f44fe22d2a/manifest.json")
SKILLS_DIR = Path("/home/lordmuffin/Documents/Notes/90 Skills")

def parse_frontmatter(skill_md: Path):
    text = skill_md.read_text()
    folder_name = skill_md.parent.name
    m = re.match(r"^---\n(.*?)\n---", text, re.DOTALL)
    if not m:
        return folder_name, ""
    fm = m.group(1)
    name = re.search(r"^name:\s*(.+)$", fm, re.MULTILINE)
    desc = re.search(r"^description:\s*(.+)$", fm, re.MULTILINE)
    return (name.group(1).strip() if name else folder_name,
            desc.group(1).strip().strip('"').strip("'") if desc else "")

def new_skill_id():
    alphabet = string.ascii_letters + string.digits
    return "skill_01" + "".join(secrets.choice(alphabet) for _ in range(24))

shutil.copy(MANIFEST, str(MANIFEST) + ".bak")
manifest = json.loads(MANIFEST.read_text())
existing = {s["name"] for s in manifest["skills"]}
now = datetime.now(timezone.utc).isoformat().replace("+00:00", "Z")
added = []

for d in sorted(SKILLS_DIR.iterdir()):
    if not d.is_dir(): continue
    skill_md = d / "SKILL.md"
    if not skill_md.exists(): continue
    name, desc = parse_frontmatter(skill_md)
    if name in existing: continue
    manifest["skills"].append({
        "skillId": new_skill_id(),
        "name": name,
        "description": desc,
        "creatorType": "user",
        "updatedAt": now,
        "enabled": True,
    })
    added.append(name)

manifest["lastUpdated"] = int(datetime.now(timezone.utc).timestamp() * 1000)
MANIFEST.write_text(json.dumps(manifest, indent=2))
print(f"Backed up to {MANIFEST}.bak")
print(f"Added {len(added)} skills: {', '.join(added)}")
