using EFT;
using System;
using UnityEngine;
using Comfort.Common;
using System.Reflection;
using EFT.InventoryLogic;
using HarmonyLib;
using SPT.Reflection.Patching;


namespace littleAddons.MyPatches
{
    internal class SimplePatch : ModulePatch // all patches must inherit ModulePatch
    {

        internal struct PlayerInfo
        {
            internal static GameWorld gameWorld
            { get => Singleton<GameWorld>.Instance; }

            internal static Player.FirearmController FC
            { get => player.HandsController as Player.FirearmController; }

            internal static Player player
            { get => gameWorld.MainPlayer; }


        }

        protected override MethodBase GetTargetMethod()
        {
            return AccessTools.Method(typeof(Player.FirearmController), nameof(Player.FirearmController.RegisterShot));
        }


        [PatchPostfix]
        static void Postfix(Player ____player)
        {

            // If this player instance is not the main player, don't continue the rest of the method
            if (!____player.IsYourPlayer)
            {
                return;
            }

            String nitro700 = "6643edda4a05be2737da3134 Name";
 
            if (PlayerInfo.FC.Item.Name == nitro700 && PlayerInfo.FC.Item.SelectedFireMode == Weapon.EFireMode.doublet )
            {
                try
                {

                    PlayerInfo.player.ActiveHealthController.DoFracture(EBodyPart.RightArm);
                    PlayerInfo.player.ActiveHealthController.DoContusion(2, 50);
                    PlayerInfo.player.ActiveHealthController.DoStun(1, 0);
                }
                catch (Exception e)
                {
                    Plugin.LogSource.LogError("Error!");
                }
            }

        }

        // uncomment the 'new SimplePatch().Enable();' line in your Plugin.cs script to enable this patch.
    }
}
